import React from 'react';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
interface TaxCalculationStepProps {
    data: Form1040Data;
    onChange: (field: keyof Form1040Data, value: any) => void;
    readonly?: boolean;
    errors: Record<string, string>;
}
export declare const TaxCalculationStep: React.FC<TaxCalculationStepProps>;
export default TaxCalculationStep;
//# sourceMappingURL=TaxCalculationStep.d.ts.map