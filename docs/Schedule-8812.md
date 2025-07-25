# Form Schedule-8812 Implementation

## Overview

This document describes the implementation of IRS Form Schedule-8812 in the TaxForge system.

## Components

### Interview View

- **Path**: `/components/Schedule-8812/Interview.tsx`
- **Purpose**: Step-by-step data collection interface
- **Usage**: `<Schedule-8812Interview onComplete={handleComplete} />`

### Form View

- **Path**: `/components/Schedule-8812/Form.tsx`
- **Purpose**: Pixel-perfect replica of official IRS form
- **Usage**: `<Schedule-8812Form printMode={true} />`

## Data Flow

1. User enters data in Interview view
2. Redux slice manages state and validation
3. Calculation engine applies Tax-Calculator policies
4. Form view displays final formatted output
5. E-File XML generation for submission

## Testing

Run tests with:

```bash
pnpm run test:form "Schedule-8812"
```

## TODO

- [ ] Implement advanced validation rules
- [ ] Add state-specific variations
- [ ] Integrate with IRS AIR system
- [ ] Add accessibility improvements

## Tax-Calculator Integration

- **Policy IDs**: p1, p2, p3... (mapped to form lines)
- **Calculation Engine**: `useCalculatedSchedule-8812` hook
- **Validation**: Zod schema with Tax-Calculator rules

## Generated Files

- Schema: `packages/irs-data/schemas/Schedule-8812.json`
- Redux: `packages/ui/src/store/slices/schedule-8812Slice.ts`
- Components: `packages/ui/src/components/Schedule-8812/`
- Tests: `packages/tests/Schedule-8812.test.tsx`
- Sample XML: `packages/irs-data/samples/Schedule-8812-sample.xml`
