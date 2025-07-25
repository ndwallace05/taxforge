import React from 'react';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
interface IncomeStepProps {
    data: Form1040Data;
    onChange: (field: keyof Form1040Data, value: any) => void;
    readonly?: boolean;
    errors: Record<string, string>;
}
export declare const IncomeStep: React.FC<IncomeStepProps>;
export default IncomeStep;
//# sourceMappingURL=IncomeStep.d.ts.map