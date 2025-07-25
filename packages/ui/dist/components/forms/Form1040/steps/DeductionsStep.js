import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSection } from '../../../common/FormSection';
import { CurrencyField } from '../../../common/CurrencyField';
import { InfoTooltip } from '../../../common/InfoTooltip';
import { CalculatedField } from '../../../common/CalculatedField';
import { Button } from '../../../common/Button';
// 2024 Standard Deduction Amounts
const STANDARD_DEDUCTIONS_2024 = {
    single: 14600,
    marriedFilingJointly: 29200,
    marriedFilingSeparately: 14600,
    headOfHousehold: 21900,
    qualifyingWidow: 29200
};
export const DeductionsStep = ({ data, onChange, readonly = false, errors, }) => {
    const { formState: { errors: formErrors } } = useFormContext();
    const [showItemizedCalculator, setShowItemizedCalculator] = useState(false);
    const [estimatedItemized, setEstimatedItemized] = useState(0);
    // Get standard deduction based on filing status
    const getStandardDeduction = () => {
        switch (data['1040_filing_status']) {
            case 'single':
                return STANDARD_DEDUCTIONS_2024.single;
            case 'married_filing_jointly':
                return STANDARD_DEDUCTIONS_2024.marriedFilingJointly;
            case 'married_filing_separately':
                return STANDARD_DEDUCTIONS_2024.marriedFilingSeparately;
            case 'head_of_household':
                return STANDARD_DEDUCTIONS_2024.headOfHousehold;
            case 'qualifying_surviving_spouse':
                return STANDARD_DEDUCTIONS_2024.qualifyingWidow;
            default:
                return STANDARD_DEDUCTIONS_2024.single;
        }
    };
    const standardDeduction = getStandardDeduction();
    const shouldItemize = (data['1040_line_12b'] || 0) > standardDeduction;
    // Calculate estimated itemized deductions
    const calculateEstimatedItemized = () => {
        const stateLocalTax = parseFloat(document.getElementById('estimated-salt')?.value || '0');
        const mortgageInterest = parseFloat(document.getElementById('estimated-mortgage')?.value || '0');
        const charitableGifts = parseFloat(document.getElementById('estimated-charity')?.value || '0');
        const medicalExpenses = parseFloat(document.getElementById('estimated-medical')?.value || '0');
        const otherDeductions = parseFloat(document.getElementById('estimated-other')?.value || '0');
        // Medical expenses must exceed 7.5% of AGI
        const agiThreshold = (data['1040_line_11'] || 0) * 0.075;
        const deductibleMedical = Math.max(0, medicalExpenses - agiThreshold);
        const total = stateLocalTax + mortgageInterest + charitableGifts + deductibleMedical + otherDeductions;
        setEstimatedItemized(total);
    };
    return (_jsxs("div", { className: "space-y-8", children: [_jsx(FormSection, { title: "Standard or Itemized Deduction", description: "Choose the deduction method that gives you the larger tax benefit", lineNumbers: "12a-12c", children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-6", children: [_jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Deduction Comparison" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white p-4 rounded-md border", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h5", { className: "font-medium text-gray-900", children: "Standard Deduction" }), _jsx(InfoTooltip, { content: "A fixed deduction amount based on your filing status. Most taxpayers use this option.", children: _jsx("svg", { className: "h-4 w-4 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }) })] }), _jsxs("div", { className: "text-2xl font-bold text-green-600", children: ["$", standardDeduction.toLocaleString()] }), _jsxs("div", { className: "text-sm text-gray-600 mt-1", children: ["Based on ", data['1040_filing_status'], " status"] })] }), _jsxs("div", { className: "bg-white p-4 rounded-md border", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h5", { className: "font-medium text-gray-900", children: "Itemized Deductions" }), _jsx(InfoTooltip, { content: "Detailed deductions for specific expenses like mortgage interest, state taxes, and charitable contributions.", children: _jsx("svg", { className: "h-4 w-4 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }) })] }), _jsxs("div", { className: "text-2xl font-bold text-blue-600", children: ["$", (data['1040_line_12b'] || 0).toLocaleString()] }), _jsx("div", { className: "text-sm text-gray-600 mt-1", children: "From Schedule A" })] })] }), _jsx("div", { className: `mt-4 p-3 rounded-md ${shouldItemize
                                        ? 'bg-blue-100 border border-blue-300'
                                        : 'bg-green-100 border border-green-300'}`, children: _jsxs("div", { className: "flex items-center", children: [_jsx("svg", { className: `h-5 w-5 mr-2 ${shouldItemize ? 'text-blue-600' : 'text-green-600'}`, fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }), _jsxs("span", { className: `font-medium ${shouldItemize ? 'text-blue-800' : 'text-green-800'}`, children: ["Recommended: ", shouldItemize ? 'Itemize' : 'Standard', " Deduction", shouldItemize && ` (Save $${((data['1040_line_12b'] || 0) - standardDeduction).toLocaleString()})`] })] }) }), !data['1040_line_12b'] && (_jsx("div", { className: "mt-4", children: _jsxs(Button, { variant: "outline", onClick: () => setShowItemizedCalculator(!showItemizedCalculator), className: "text-sm", children: [showItemizedCalculator ? 'Hide' : 'Show', " Itemized Deduction Estimator"] }) }))] }), showItemizedCalculator && (_jsxs("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-6", children: [_jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Estimate Your Itemized Deductions" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "State and Local Taxes (max $10,000)" }), _jsx("input", { type: "number", id: "estimated-salt", className: "w-full px-3 py-2 border border-gray-300 rounded-md", placeholder: "0", onChange: calculateEstimatedItemized })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Mortgage Interest" }), _jsx("input", { type: "number", id: "estimated-mortgage", className: "w-full px-3 py-2 border border-gray-300 rounded-md", placeholder: "0", onChange: calculateEstimatedItemized })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Charitable Contributions" }), _jsx("input", { type: "number", id: "estimated-charity", className: "w-full px-3 py-2 border border-gray-300 rounded-md", placeholder: "0", onChange: calculateEstimatedItemized })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Medical Expenses" }), _jsx("input", { type: "number", id: "estimated-medical", className: "w-full px-3 py-2 border border-gray-300 rounded-md", placeholder: "0", onChange: calculateEstimatedItemized })] })] }), _jsxs("div", { className: "bg-white p-4 rounded-md border", children: [_jsxs("div", { className: "text-lg font-semibold", children: ["Estimated Itemized Total: $", estimatedItemized.toLocaleString()] }), _jsx("div", { className: "text-sm text-gray-600 mt-1", children: estimatedItemized > standardDeduction
                                                ? `You could save $${(estimatedItemized - standardDeduction).toLocaleString()} by itemizing`
                                                : `Standard deduction is $${(standardDeduction - estimatedItemized).toLocaleString()} better` })] })] })), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(CalculatedField, { label: "Standard deduction", value: standardDeduction, lineNumber: "12a", calculation: `Based on ${data['1040_filing_status']} filing status`, className: "bg-green-50 border-2 border-green-300" }), _jsx(CurrencyField, { label: "Itemized deductions from Schedule A", name: "1040_line_12b", value: data['1040_line_12b'], onChange: (value) => onChange('1040_line_12b', value), disabled: readonly, error: errors['1040_line_12b'] || formErrors['1040_line_12b']?.message, lineNumber: "12b", helpText: "Enter amount from Schedule A, line 17", placeholder: "Leave blank to use standard deduction" })] }), _jsx(CalculatedField, { label: "Deduction (larger of line 12a or 12b)", value: Math.max(standardDeduction, data['1040_line_12b'] || 0), lineNumber: "12c", calculation: `max(${standardDeduction.toLocaleString()}, ${(data['1040_line_12b'] || 0).toLocaleString()})`, className: "bg-blue-50 border-2 border-blue-300 font-semibold", highlight: true })] }) }), _jsx(FormSection, { title: "Qualified Business Income Deduction", description: "Section 199A deduction for pass-through business income", lineNumbers: "13", children: _jsxs("div", { className: "space-y-6", children: [_jsx(CurrencyField, { label: "Qualified business income deduction from Form 8995 or 8995-A", name: "1040_line_13", value: data['1040_line_13'], onChange: (value) => onChange('1040_line_13', value), disabled: readonly, error: errors['1040_line_13'] || formErrors['1040_line_13']?.message, lineNumber: "13", helpText: "Up to 20% deduction for qualified business income" }), data['1040_line_11'] > 0 && !data['1040_line_13'] && (_jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-md p-4", children: _jsxs("div", { className: "flex items-start", children: [_jsx("svg", { className: "h-5 w-5 text-blue-400 mt-0.5 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-medium text-blue-800", children: "QBI Deduction Available?" }), _jsx("p", { className: "text-sm text-blue-700 mt-1", children: "If you have business income, rental income, or income from partnerships/S-corps, you may qualify for the Section 199A deduction. Use Form 8995 or 8995-A to calculate." })] })] }) }))] }) }), _jsx(FormSection, { title: "Taxable Income", description: "Your income after deductions - this determines your tax bracket", lineNumbers: "14-15", children: _jsxs("div", { className: "space-y-6", children: [_jsx(CalculatedField, { label: "Add lines 12c and 13", value: (Math.max(standardDeduction, data['1040_line_12b'] || 0)) + (data['1040_line_13'] || 0), lineNumber: "14", calculation: `${Math.max(standardDeduction, data['1040_line_12b'] || 0).toLocaleString()} + ${(data['1040_line_13'] || 0).toLocaleString()}`, className: "bg-gray-50 border-2 border-gray-300" }), _jsx(CalculatedField, { label: "Subtract line 14 from line 11. This is your taxable income", value: Math.max(0, (data['1040_line_11'] || 0) - ((Math.max(standardDeduction, data['1040_line_12b'] || 0)) + (data['1040_line_13'] || 0))), lineNumber: "15", calculation: `max(0, ${(data['1040_line_11'] || 0).toLocaleString()} - ${((Math.max(standardDeduction, data['1040_line_12b'] || 0)) + (data['1040_line_13'] || 0)).toLocaleString()})`, className: "bg-red-50 border-2 border-red-300 font-semibold text-lg", highlight: true, important: true })] }) }), data['1040_line_15'] > 0 && (_jsxs("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Your Tax Bracket Information" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "bg-white p-4 rounded-md border", children: [_jsx("div", { className: "text-sm text-gray-600", children: "Taxable Income" }), _jsxs("div", { className: "text-2xl font-bold text-gray-900", children: ["$", (data['1040_line_15'] || 0).toLocaleString()] })] }), _jsxs("div", { className: "bg-white p-4 rounded-md border", children: [_jsx("div", { className: "text-sm text-gray-600", children: "Marginal Tax Rate" }), _jsx("div", { className: "text-2xl font-bold text-red-600", children: (() => {
                                            const taxableIncome = data['1040_line_15'] || 0;
                                            const filingStatus = data.filingStatus;
                                            // 2024 Tax Brackets (simplified)
                                            if (filingStatus === 'single') {
                                                if (taxableIncome <= 11600)
                                                    return '10%';
                                                if (taxableIncome <= 47150)
                                                    return '12%';
                                                if (taxableIncome <= 100525)
                                                    return '22%';
                                                if (taxableIncome <= 191950)
                                                    return '24%';
                                                if (taxableIncome <= 243725)
                                                    return '32%';
                                                if (taxableIncome <= 609350)
                                                    return '35%';
                                                return '37%';
                                            }
                                            else if (filingStatus === 'marriedFilingJointly') {
                                                if (taxableIncome <= 23200)
                                                    return '10%';
                                                if (taxableIncome <= 94300)
                                                    return '12%';
                                                if (taxableIncome <= 201050)
                                                    return '22%';
                                                if (taxableIncome <= 383900)
                                                    return '24%';
                                                if (taxableIncome <= 487450)
                                                    return '32%';
                                                if (taxableIncome <= 731200)
                                                    return '35%';
                                                return '37%';
                                            }
                                            return 'N/A';
                                        })() })] })] }), _jsx("div", { className: "mt-4 text-sm text-yellow-800", children: _jsx(InfoTooltip, { content: "Your marginal tax rate is the rate applied to your last dollar of income. Your effective rate (total tax \u00F7 total income) will be lower.", children: _jsx("span", { className: "cursor-help border-b border-dotted border-yellow-600", children: "Understanding tax brackets" }) }) })] })), _jsxs("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Deduction Summary" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 text-sm", children: [_jsxs("div", { className: "bg-white p-3 rounded border", children: [_jsx("div", { className: "text-gray-600", children: "Adjusted Gross Income" }), _jsxs("div", { className: "text-lg font-semibold text-gray-900", children: ["$", (data['1040_line_11'] || 0).toLocaleString()] })] }), _jsxs("div", { className: "bg-white p-3 rounded border", children: [_jsx("div", { className: "text-gray-600", children: "Total Deductions" }), _jsxs("div", { className: "text-lg font-semibold text-gray-900", children: ["$", ((Math.max(standardDeduction, data['1040_line_12b'] || 0)) + (data['1040_line_13'] || 0)).toLocaleString()] })] }), _jsxs("div", { className: "bg-white p-3 rounded border", children: [_jsx("div", { className: "text-gray-600", children: "Deduction Type" }), _jsx("div", { className: "text-lg font-semibold text-gray-900", children: shouldItemize ? 'Itemized' : 'Standard' })] }), _jsxs("div", { className: "bg-white p-3 rounded border", children: [_jsx("div", { className: "text-gray-600", children: "Taxable Income" }), _jsxs("div", { className: "text-lg font-semibold text-red-600", children: ["$", (data['1040_line_15'] || 0).toLocaleString()] })] })] })] }), _jsx("div", { className: "mt-8 p-4 bg-green-50 border border-green-200 rounded-md", children: _jsxs("div", { className: "flex items-center", children: [_jsx("svg", { className: "h-5 w-5 text-green-400 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }), _jsx("span", { className: "text-sm font-medium text-green-800", children: "Complete this section to proceed to Tax Calculation" })] }) })] }));
};
export default DeductionsStep;
