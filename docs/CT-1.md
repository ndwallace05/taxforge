# Form CT-1 Implementation

## Overview

This document describes the implementation of IRS Form CT-1 in the TaxForge system.

## Components

### Interview View

- **Path**: `/components/CT-1/Interview.tsx`
- **Purpose**: Step-by-step data collection interface
- **Usage**: `<CT-1Interview onComplete={handleComplete} />`

### Form View

- **Path**: `/components/CT-1/Form.tsx`
- **Purpose**: Pixel-perfect replica of official IRS form
- **Usage**: `<CT-1Form printMode={true} />`

## Data Flow

1. User enters data in Interview view
2. Redux slice manages state and validation
3. Calculation engine applies Tax-Calculator policies
4. Form view displays final formatted output
5. E-File XML generation for submission

## Testing

Run tests with:

```bash
pnpm run test:form "CT-1"
```

## TODO

- [ ] Implement advanced validation rules
- [ ] Add state-specific variations
- [ ] Integrate with IRS AIR system
- [ ] Add accessibility improvements

## Tax-Calculator Integration

- **Policy IDs**: p1, p2, p3... (mapped to form lines)
- **Calculation Engine**: `useCalculatedCT-1` hook
- **Validation**: Zod schema with Tax-Calculator rules

## Generated Files

- Schema: `packages/irs-data/schemas/CT-1.json`
- Redux: `packages/ui/src/store/slices/ct-1Slice.ts`
- Components: `packages/ui/src/components/CT-1/`
- Tests: `packages/tests/CT-1.test.tsx`
- Sample XML: `packages/irs-data/samples/CT-1-sample.xml`
