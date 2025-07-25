# Form SS-4 Implementation

## Overview

This document describes the implementation of IRS Form SS-4 in the TaxForge system.

## Components

### Interview View

- **Path**: `/components/SS-4/Interview.tsx`
- **Purpose**: Step-by-step data collection interface
- **Usage**: `<SS-4Interview onComplete={handleComplete} />`

### Form View

- **Path**: `/components/SS-4/Form.tsx`
- **Purpose**: Pixel-perfect replica of official IRS form
- **Usage**: `<SS-4Form printMode={true} />`

## Data Flow

1. User enters data in Interview view
2. Redux slice manages state and validation
3. Calculation engine applies Tax-Calculator policies
4. Form view displays final formatted output
5. E-File XML generation for submission

## Testing

Run tests with:

```bash
pnpm run test:form "SS-4"
```

## TODO

- [ ] Implement advanced validation rules
- [ ] Add state-specific variations
- [ ] Integrate with IRS AIR system
- [ ] Add accessibility improvements

## Tax-Calculator Integration

- **Policy IDs**: p1, p2, p3... (mapped to form lines)
- **Calculation Engine**: `useCalculatedSS-4` hook
- **Validation**: Zod schema with Tax-Calculator rules

## Generated Files

- Schema: `packages/irs-data/schemas/SS-4.json`
- Redux: `packages/ui/src/store/slices/ss-4Slice.ts`
- Components: `packages/ui/src/components/SS-4/`
- Tests: `packages/tests/SS-4.test.tsx`
- Sample XML: `packages/irs-data/samples/SS-4-sample.xml`
