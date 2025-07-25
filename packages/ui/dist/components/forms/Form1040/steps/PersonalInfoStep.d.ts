import React from 'react';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
interface PersonalInfoStepProps {
    data: Form1040Data;
    onChange: (field: keyof Form1040Data, value: any) => void;
    readonly?: boolean;
    errors: Record<string, string>;
}
export declare const PersonalInfoStep: React.FC<PersonalInfoStepProps>;
export default PersonalInfoStep;
//# sourceMappingURL=PersonalInfoStep.d.ts.map