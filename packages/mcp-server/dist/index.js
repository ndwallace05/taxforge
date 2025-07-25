import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { execSync } from 'node:child_process';
const server = new Server({ name: 'taxforge-mcp', version: '1.0.0' }, { capabilities: { tools: {} } });
server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
        { name: 'statusSnapshot', description: 'Return current form-queue snapshot', inputSchema: {} },
        { name: 'formFactory', description: 'Run factory for one form', inputSchema: { type: 'object', properties: { form: { type: 'string' }, force: { type: 'boolean' } }, required: ['form'] } }
    ]
}));
server.setRequestHandler(CallToolRequestSchema, async (req) => {
    switch (req.params.name) {
        case 'statusSnapshot':
            return { content: [{ type: 'text', text: execSync('node scripts/statusSnapshot.mjs', { cwd: process.env.REPO_ROOT || process.cwd(), encoding: 'utf8' }) }] };
        case 'formFactory':
            const form = req.params.arguments?.form || '1040';
            const force = req.params.arguments?.force || false;
            const cmd = `node scripts/formFactory.mjs ${form} ${force ? '--force' : ''}`;
            return { content: [{ type: 'text', text: execSync(cmd, { cwd: process.env.REPO_ROOT || process.cwd(), encoding: 'utf8' }) }] };
        default:
            throw new Error('Unknown tool');
    }
});
const transport = new StdioServerTransport();
server.connect(transport);
