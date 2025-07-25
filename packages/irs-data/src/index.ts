// IRS Data Package Exports

// Form Schemas
export { default as form1040Schema } from '../schemas/1040.json';

// Types
export interface IRSFormSchema {
  formId: string;
  formName: string;
  taxYear: number;
  version: string;
  fields: Record<string, any>;
  validation: Record<string, any>;
  calculations: Record<string, any>;
  metadata: {
    description: string;
    instructions: string;
    schedules: string[];
    resources: {
      irs: string;
      instructions: string;
      publication: string;
    };
  };
}

export interface FormField {
  type: string;
  label: string;
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
  conditional?: {
    field: string;
    value: any;
    operator?: string;
  };
  calculation?: {
    formula: string;
    dependencies: string[];
  };
  help?: string;
  lineNumber?: string;
}

export interface TaxBracket {
  min: number;
  max: number;
  rate: number;
}

export interface FilingStatus {
  single: TaxBracket[];
  marriedFilingJointly: TaxBracket[];
  marriedFilingSeparately: TaxBracket[];
  headOfHousehold: TaxBracket[];
}