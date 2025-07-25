import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { execSync } from 'child_process';
import * as process from 'process';

const REPO_ROOT = process.env.REPO_ROOT ?? process.cwd();

const server = new Server(
  { name: 'taxforge-mcp', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    { name: 'statusSnapshot', description: 'Return current form-queue snapshot', inputSchema: {} },
    { name: 'formFactory', description: 'Run factory for one form', inputSchema: {
        type: 'object',
        properties: { form: { type: 'string' }, force: { type: 'boolean' } },
        required: ['form']
      } }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  switch (req.params.name) {
    case 'statusSnapshot':
      try {
        const stdout = execSync('node scripts/statusSnapshot.mjs', {
          cwd: REPO_ROOT,
          encoding: 'utf8'
        });
        return { content: [{ type: 'text', text: stdout }] };
      } catch (error: any) {
        return { content: [{ type: 'text', text: `Error: ${error.message}` }] };
      }
    case 'formFactory':
      try {
        const { form } = req.params.arguments as { form: string };
        const stdout = execSync(`node scripts/formFactory.mjs ${form}`, {
          cwd: REPO_ROOT,
          encoding: 'utf8'
        });
        return { content: [{ type: 'text', text: stdout }] };
      } catch (error: any) {
        return { content: [{ type: 'text', text: `Error: ${error.message}` }] };
      }
    default:
      throw new Error('Unknown tool');
  }
});

const transport = new StdioServerTransport();
server.connect(transport);