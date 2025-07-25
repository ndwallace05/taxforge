# Form W-4P Implementation

## Overview

This document describes the implementation of IRS Form W-4P in the TaxForge system.

## Components

### Interview View

- **Path**: `/components/W-4P/Interview.tsx`
- **Purpose**: Step-by-step data collection interface
- **Usage**: `<W-4PInterview onComplete={handleComplete} />`

### Form View

- **Path**: `/components/W-4P/Form.tsx`
- **Purpose**: Pixel-perfect replica of official IRS form
- **Usage**: `<W-4PForm printMode={true} />`

## Data Flow

1. User enters data in Interview view
2. Redux slice manages state and validation
3. Calculation engine applies Tax-Calculator policies
4. Form view displays final formatted output
5. E-File XML generation for submission

## Testing

Run tests with:

```bash
pnpm run test:form "W-4P"
```

## TODO

- [ ] Implement advanced validation rules
- [ ] Add state-specific variations
- [ ] Integrate with IRS AIR system
- [ ] Add accessibility improvements

## Tax-Calculator Integration

- **Policy IDs**: p1, p2, p3... (mapped to form lines)
- **Calculation Engine**: `useCalculatedW-4P` hook
- **Validation**: Zod schema with Tax-Calculator rules

## Generated Files

- Schema: `packages/irs-data/schemas/W-4P.json`
- Redux: `packages/ui/src/store/slices/w-4pSlice.ts`
- Components: `packages/ui/src/components/W-4P/`
- Tests: `packages/tests/W-4P.test.tsx`
- Sample XML: `packages/irs-data/samples/W-4P-sample.xml`
