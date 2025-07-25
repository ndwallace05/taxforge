import React from 'react';
interface FormSectionProps {
    title: string;
    description?: string;
    lineNumbers?: string;
    children: React.ReactNode;
    className?: string;
    collapsible?: boolean;
    defaultExpanded?: boolean;
    helpText?: string;
    required?: boolean;
    error?: string;
}
export declare const FormSection: React.FC<FormSectionProps>;
export default FormSection;
//# sourceMappingURL=FormSection.d.ts.map