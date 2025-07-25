import React from 'react';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';
export interface PersonalInfoStepProps {
    data: any;
    calculated: Calculated1040NRValues;
    errors: string[];
    readOnly?: boolean;
    onNext: () => void;
    onPrevious: () => void;
}
export declare const PersonalInfoStep: React.FC<PersonalInfoStepProps>;
export default PersonalInfoStep;
//# sourceMappingURL=PersonalInfoStep.d.ts.map