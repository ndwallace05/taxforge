# TaxForge Autonomous Agent Template Library

This document contains copy-paste ready prompts for the autonomous agent to execute deterministic tasks for IRS form compliance.

## 🔧 LEVEL-0 BOOTSTRAP Templates

### T-BOOTSTRAP-001: Initial Project Setup

```
As TaxForge-Engineer, scaffold a production-grade monorepo:

1. TurboRepo root with:
   • apps/taxforge-web (Next.js 14, React 18, TypeScript, TailwindCSS 3.4)
   • packages/ui (Storybook, shared components)
   • packages/irs-data (JSON schemas, Zod, raw XSD)
   • packages/tests (Jest + React-Testing-Library)
2. Pre-commit hooks (husky + lint-staged)
3. GitHub Actions workflow (lint, test, build, chromatic)
4. README with `pnpm dev`, `pnpm test`, `pnpm storybook`

Emit the tree, package.json files, and GitHub Actions YAML.
```

## 🧩 LEVEL-1 FORM EPIC Templates

### T-FORM-001: Form Discovery

```
Fetch the official PDF, instructions, and latest MeF XSD for {form}.
Return: PDF URL, XSD URL, total page count, list of every line number in the PDF (preserve order).

Success Criteria: ✅ JSON list of lines 1..n
```

### T-FORM-002: JSON Schema Generation

```
Transform the PDF & XSD into a single JSON file:
- key: "{form}_{line}"
- label, type, validation, calcFormula, policyId, visibility rules
Save as packages/irs-data/schemas/{form}.json

Success Criteria: ✅ 100% lines present
```

### T-FORM-003: Redux Slice Generation

```
Generate packages/ui/src/store/slices/{form}Slice.ts:
- initialState keyed by line
- setValue action
- selectors: isComplete, errors, calculatedLines
Integrate into root store.

Success Criteria: ✅ Type-safe slice
```

### T-FORM-004: UI Components Generation

```
Create:
1. Interview view – StepWizard (/components/{form}/Interview.tsx)
2. Form view – pixel-perfect replica (/components/{form}/Form.tsx)
3. Print stylesheet – @media print {...}
4. Storybook stories

Success Criteria: ✅ Storybook passes
```

### T-FORM-005: Validation & Calculation Engine

```
Generate Zod schema & calculation hooks:
- React-Hook-Form resolver
- useCalculated{Form}() hook in /hooks/useCalculated{Form}.ts
- Live update Redux slice on every keystroke

Success Criteria: ✅ Jest 100% coverage
```

### T-FORM-006: Unit Tests

```
Jest tests in packages/tests/{form}.test.tsx:
- render every input
- assert aria-labels
- simulate user events for 100% lines
- snapshot diff on print view

Success Criteria: ✅ CI green
```

### T-FORM-007: E-File XML Sample

```
Produce a valid MeF XML snippet for a dummy taxpayer that exercises every line/schedule.

Success Criteria: ✅ IRS schema-valid
```

### T-FORM-008: Documentation & TODO

```
Write docs/{form}.md:
- how to access Interview vs Form view
- any TODO items

Success Criteria: ✅ README link
```

## 🔗 LEVEL-2 INTEGRATION Templates

### T-INTEGRATION-001: Router & Navigation

```
Add apps/taxforge-web/src/app/(dashboard)/[clientId]/[form]/page.tsx dynamic route renders Interview or Form via query param ?view=form

Success Criteria: ✅ 200 OK
```

### T-INTEGRATION-002: Global Search

```
Implement "Search within return" fuzzy search bar (Command-K):
- searches across all form lines and values
- highlight matches in yellow

Success Criteria: ✅ instant results
```

### T-INTEGRATION-003: Print & E-File Pipeline

```
1. Print stylesheet: hide nav, show red-ink mimic
2. E-File: POST XML to /api/e-file (stub for IRS AIR system)
3. PDF generator: server-side html-pdf-node for client copy

Success Criteria: ✅ PDF passes IRS preview
```

### T-INTEGRATION-004: Regression Suite

```
GitHub Action matrix:
- Node 18, 20
- Chrome, Firefox, Safari (Playwright)
- 100% form coverage via jest --projects packages/tests

Success Criteria: ✅ badge green
```

## 🔄 LEVEL-3 RUNTIME LOOP Templates

### T-RUNTIME-001: Queue Processing

```
Next form in queue: {form}
Execute Prompt-1.1 → 1.8 sequentially.
```

### T-RUNTIME-002: Self-Healing

```
Test failed on {form} line {line}: {error}
Provide fix, update test, regenerate snapshot.
```

### T-RUNTIME-003: State Variant

```
Add {state} state module for {form}
Generate schema, UI, validation, XML post-processor.
```

### T-RUNTIME-004: Feature Flag

```
Wrap new {form} behind feature flag ENABLE_FORM_{form} in LaunchDarkly JSON.
```

## 📋 Quick Reference Commands

### Agent Execution

```bash
# Bootstrap project
pnpm run agent:bootstrap

# Process specific form
pnpm run agent:form 1040

# Run integration tasks
pnpm run agent:integration

# Start autonomous runtime loop
pnpm run agent:runtime-loop

# Process next form in queue
pnpm run agent:next
```

### Compliance Checks

```bash
# Run full compliance audit
pnpm run audit:compliance

# Check Tax-Calculator integration
pnpm run audit:tax-calculator

# Verify Drake pipeline
pnpm run audit:drake

# Run form-specific tests
pnpm run test:form "1040"
```

### Development Commands

```bash
# Start development server
pnpm dev

# Run all tests
pnpm test

# Launch Storybook
pnpm storybook

# Build for production
pnpm build
```

## 🎯 Success Criteria Matrix

| Level | Task              | Success Criteria          | Validation Command                                                     |
| ----- | ----------------- | ------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| 0     | Bootstrap         | ✅ All packages created   | `ls apps packages`                                                     |
| 1.1   | Form Discovery    | ✅ JSON list of lines     | `cat ai-agent-instructions/DISCOVERY-{form}.json`                      |
| 1.2   | Schema Generation | ✅ 100% lines present     | `jq 'keys                                                              | length' packages/irs-data/schemas/{form}.json` |
| 1.3   | Redux Slice       | ✅ Type-safe slice        | `tsc --noEmit packages/ui/src/store/slices/{form}Slice.ts`             |
| 1.4   | UI Components     | ✅ Storybook passes       | `pnpm storybook --ci`                                                  |
| 1.5   | Validation Engine | ✅ Jest 100% coverage     | `pnpm test:form "{form}" --coverage`                                   |
| 1.6   | Unit Tests        | ✅ CI green               | `pnpm test:ci`                                                         |
| 1.7   | E-File XML        | ✅ IRS schema-valid       | `xmllint --schema irs.xsd packages/irs-data/samples/{form}-sample.xml` |
| 1.8   | Documentation     | ✅ README link            | `grep -q "{form}" README.md`                                           |
| 2.1   | Router            | ✅ 200 OK                 | `curl http://localhost:3000/client1/{form}`                            |
| 2.2   | Global Search     | ✅ instant results        | `cypress run --spec search.cy.ts`                                      |
| 2.3   | Print Pipeline    | ✅ PDF passes IRS preview | `node scripts/validate-pdf.js`                                         |
| 2.4   | Regression Suite  | ✅ badge green            | `playwright test`                                                      |
| 3     | Runtime Loop      | ✅ All forms complete     | `jq '.completed_forms                                                  | length' ai-agent-instructions/FORM-QUEUE.json` |

## 🚨 Error Recovery Templates

### Schema Validation Error

```
Schema validation failed for {form}:
{error_message}

Fix: Regenerate schema with correct Tax-Calculator policy mappings
Command: pnpm run agent:form {form}
```

### Test Failure Recovery

```
Test suite failed for {form}:
{test_output}

Fix: Update snapshots and regenerate components
Command: pnpm run test:form "{form}" --updateSnapshot
```

### Build Failure Recovery

```
Build failed with TypeScript errors:
{typescript_errors}

Fix: Regenerate type definitions and Redux slices
Command: pnpm run agent:form {form}
```

## 📊 Progress Tracking

### Queue Status Check

```bash
# View current form queue
cat ai-agent-instructions/FORM-QUEUE.json | jq '.priority_forms[] | select(.status == "pending")'

# Check completion rate
node -e "const q=require('./ai-agent-instructions/FORM-QUEUE.json'); console.log(\`Completion: \${q.completed_forms.length}/(\${q.priority_forms.length + q.completed_forms.length + q.failed_forms.length}) forms\`);"

# View failed forms
cat ai-agent-instructions/FORM-QUEUE.json | jq '.failed_forms'
```

### Agent Log Analysis

```bash
# View recent agent activity
tail -20 ai-agent-instructions/AGENT-LOG.md

# Check for errors
grep "ERROR" ai-agent-instructions/PROGRESS.log

# View completion timestamps
grep "completed" ai-agent-instructions/PROGRESS.log | tail -10
```

## 🎉 Completion Gates

Agent stops when:

- ✅ All 170+ forms processed
- ✅ CI badge green
- ✅ Coverage badge 100%
- ✅ `git tag v1-irs-complete` created
- ✅ Compliance audit passes

### Final Validation

```bash
# Verify completion
pnpm run audit:compliance
git tag | grep v1-irs-complete
echo "🎉 TaxForge IRS compliance achieved!"
```
