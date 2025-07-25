import React from 'react';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
interface ReviewStepProps {
    data: Form1040Data;
    onChange: (field: keyof Form1040Data, value: any) => void;
    onSubmit: () => void;
    readonly?: boolean;
    errors: Record<string, string>;
    isSubmitting?: boolean;
}
export declare const ReviewStep: React.FC<ReviewStepProps>;
export default ReviewStep;
//# sourceMappingURL=ReviewStep.d.ts.map