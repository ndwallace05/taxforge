# Form Schedule-E Implementation

## Overview

This document describes the implementation of IRS Form Schedule-E in the TaxForge system.

## Components

### Interview View

- **Path**: `/components/Schedule-E/Interview.tsx`
- **Purpose**: Step-by-step data collection interface
- **Usage**: `<Schedule-EInterview onComplete={handleComplete} />`

### Form View

- **Path**: `/components/Schedule-E/Form.tsx`
- **Purpose**: Pixel-perfect replica of official IRS form
- **Usage**: `<Schedule-EForm printMode={true} />`

## Data Flow

1. User enters data in Interview view
2. Redux slice manages state and validation
3. Calculation engine applies Tax-Calculator policies
4. Form view displays final formatted output
5. E-File XML generation for submission

## Testing

Run tests with:

```bash
pnpm run test:form "Schedule-E"
```

## TODO

- [ ] Implement advanced validation rules
- [ ] Add state-specific variations
- [ ] Integrate with IRS AIR system
- [ ] Add accessibility improvements

## Tax-Calculator Integration

- **Policy IDs**: p1, p2, p3... (mapped to form lines)
- **Calculation Engine**: `useCalculatedSchedule-E` hook
- **Validation**: Zod schema with Tax-Calculator rules

## Generated Files

- Schema: `packages/irs-data/schemas/Schedule-E.json`
- Redux: `packages/ui/src/store/slices/schedule-eSlice.ts`
- Components: `packages/ui/src/components/Schedule-E/`
- Tests: `packages/tests/Schedule-E.test.tsx`
- Sample XML: `packages/irs-data/samples/Schedule-E-sample.xml`
