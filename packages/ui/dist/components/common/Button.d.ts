import React from 'react';
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
    ariaLabel?: string;
}
export declare const Button: React.FC<ButtonProps>;
export declare const PrimaryButton: React.FC<Omit<ButtonProps, 'variant'>>;
export declare const SecondaryButton: React.FC<Omit<ButtonProps, 'variant'>>;
export declare const OutlineButton: React.FC<Omit<ButtonProps, 'variant'>>;
export declare const DangerButton: React.FC<Omit<ButtonProps, 'variant'>>;
export declare const SuccessButton: React.FC<Omit<ButtonProps, 'variant'>>;
export declare const SubmitButton: React.FC<Omit<ButtonProps, 'type'>>;
export declare const CancelButton: React.FC<Omit<ButtonProps, 'variant'>>;
export declare const SaveButton: React.FC<Omit<ButtonProps, 'variant' | 'leftIcon'>>;
export declare const NextButton: React.FC<Omit<ButtonProps, 'variant' | 'rightIcon'>>;
export declare const PreviousButton: React.FC<Omit<ButtonProps, 'variant' | 'leftIcon'>>;
export declare const EditButton: React.FC<Omit<ButtonProps, 'variant' | 'leftIcon'>>;
export declare const DeleteButton: React.FC<Omit<ButtonProps, 'variant' | 'leftIcon'>>;
export declare const DownloadButton: React.FC<Omit<ButtonProps, 'variant' | 'leftIcon'>>;
export declare const PrintButton: React.FC<Omit<ButtonProps, 'variant' | 'leftIcon'>>;
export default Button;
//# sourceMappingURL=Button.d.ts.map