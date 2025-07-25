import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { Checkbox } from '../../../ui/checkbox';
import { Button } from '../../../ui/button';
import { Alert, AlertDescription } from '../../../ui/alert';
import { Separator } from '../../../ui/separator';
import { Badge } from '../../../ui/badge';
// import { ChevronLeft, ChevronRight, Globe, Calendar, AlertTriangle, Info, Calculator } from 'lucide-react';
import { updateField } from '../../../../store/slices/form1040NRSlice';
const VISA_CATEGORIES = [
    { value: 'F', label: 'F - Student' },
    { value: 'J', label: 'J - Exchange Visitor' },
    { value: 'M', label: 'M - Vocational Student' },
    { value: 'Q', label: 'Q - Cultural Exchange' },
    { value: 'H', label: 'H - Temporary Worker' },
    { value: 'L', label: 'L - Intracompany Transfer' },
    { value: 'O', label: 'O - Extraordinary Ability' },
    { value: 'P', label: 'P - Athlete/Artist' },
    { value: 'B', label: 'B - Business/Tourism' },
    { value: 'OTHER', label: 'Other' },
];
const TREATY_COUNTRIES = [
    { value: 'CA', label: 'Canada' },
    { value: 'MX', label: 'Mexico' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'DE', label: 'Germany' },
    { value: 'FR', label: 'France' },
    { value: 'JP', label: 'Japan' },
    { value: 'KR', label: 'South Korea' },
    { value: 'CN', label: 'China' },
    { value: 'IN', label: 'India' },
    { value: 'AU', label: 'Australia' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'CH', label: 'Switzerland' },
    { value: 'OTHER', label: 'Other Treaty Country' },
];
export const ResidencyStep = ({ data, calculated, errors, readOnly = false, onNext, onPrevious, }) => {
    const dispatch = useDispatch();
    const handleFieldChange = (field, value) => {
        if (!readOnly) {
            dispatch(updateField({ field, value }));
        }
    };
    const isFormValid = () => {
        return (data['scheduleOI_days_present_current_year'] !== undefined &&
            data['scheduleOI_days_present_prior_year_1'] !== undefined &&
            data['scheduleOI_days_present_prior_year_2'] !== undefined);
    };
    const getSubstantialPresenceStatus = () => {
        if (calculated.substantialPresenceDays >= 183) {
            return {
                status: 'Met',
                color: 'text-red-600',
                bgColor: 'bg-red-50',
                borderColor: 'border-red-200',
                message: 'You may be considered a resident alien for tax purposes.'
            };
        }
        else if (calculated.substantialPresenceDays >= 150) {
            return {
                status: 'Close',
                color: 'text-orange-600',
                bgColor: 'bg-orange-50',
                borderColor: 'border-orange-200',
                message: 'You are close to meeting the substantial presence test.'
            };
        }
        else {
            return {
                status: 'Not Met',
                color: 'text-green-600',
                bgColor: 'bg-green-50',
                borderColor: 'border-green-200',
                message: 'You do not meet the substantial presence test.'
            };
        }
    };
    const substantialPresenceStatus = getSubstantialPresenceStatus();
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs(Alert, { className: "border-blue-200 bg-blue-50", children: [_jsx("span", { className: "text-blue-600", children: "\uD83C\uDF0D" }), _jsxs(AlertDescription, { className: "text-blue-800", children: [_jsx("strong", { children: "Residency Status Determination:" }), " This step helps determine your tax residency status and whether you qualify to file Form 1040-NR. Your residency status affects your tax obligations and available deductions."] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx("span", { children: "\uD83E\uDDEE" }), _jsx("span", { children: "Substantial Presence Test" })] }), _jsx("p", { className: "text-sm text-gray-600", children: "The substantial presence test determines if you are considered a U.S. resident for tax purposes." })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "currentYearDays", children: "Days in U.S. - 2024 (Current Year)" }), _jsx(Input, { id: "currentYearDays", type: "number", min: "0", max: "366", value: data['scheduleOI_days_present_current_year'] || '', onChange: (e) => handleFieldChange('scheduleOI_days_present_current_year', parseInt(e.target.value) || 0), placeholder: "0", disabled: readOnly, className: errors.includes('current_year_days') ? 'border-red-500' : '' }), _jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Full weight (\u00D71)" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "priorYear1Days", children: "Days in U.S. - 2023" }), _jsx(Input, { id: "priorYear1Days", type: "number", min: "0", max: "366", value: data['scheduleOI_days_present_prior_year_1'] || '', onChange: (e) => handleFieldChange('scheduleOI_days_present_prior_year_1', parseInt(e.target.value) || 0), placeholder: "0", disabled: readOnly, className: errors.includes('prior_year_1_days') ? 'border-red-500' : '' }), _jsx("p", { className: "text-xs text-gray-600 mt-1", children: "1/3 weight (\u00D70.33)" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "priorYear2Days", children: "Days in U.S. - 2022" }), _jsx(Input, { id: "priorYear2Days", type: "number", min: "0", max: "366", value: data['scheduleOI_days_present_prior_year_2'] || '', onChange: (e) => handleFieldChange('scheduleOI_days_present_prior_year_2', parseInt(e.target.value) || 0), placeholder: "0", disabled: readOnly, className: errors.includes('prior_year_2_days') ? 'border-red-500' : '' }), _jsx("p", { className: "text-xs text-gray-600 mt-1", children: "1/6 weight (\u00D70.17)" })] })] }), _jsx(Separator, {}), _jsxs("div", { className: `p-4 rounded-lg border ${substantialPresenceStatus.bgColor} ${substantialPresenceStatus.borderColor}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h4", { className: "font-semibold text-gray-900", children: "Substantial Presence Test Result" }), _jsx(Badge, { variant: "outline", className: `${substantialPresenceStatus.color} border-current`, children: substantialPresenceStatus.status })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [_jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "Weighted Days Calculation:" }), _jsxs("p", { className: "font-mono", children: [data['scheduleOI_days_present_current_year'] || 0, " +", Math.round((data['scheduleOI_days_present_prior_year_1'] || 0) / 3), " +", Math.round((data['scheduleOI_days_present_prior_year_2'] || 0) / 6), " =", _jsxs("span", { className: `font-bold ${substantialPresenceStatus.color}`, children: [calculated.substantialPresenceDays.toFixed(1), " days"] })] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "Status:" }), _jsx("p", { className: `font-semibold ${substantialPresenceStatus.color}`, children: substantialPresenceStatus.message })] })] })] }), calculated.isSubstantialPresenceTest && (_jsxs(Alert, { variant: "destructive", children: [_jsx("span", { className: "text-yellow-600", children: "\u26A0\uFE0F" }), _jsxs(AlertDescription, { children: [_jsx("strong", { children: "Important:" }), " You may meet the substantial presence test and be considered a resident alien. Consider the closer connection exception or consult a tax professional. You may need to file Form 1040 instead."] })] }))] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Visa and Immigration Status" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "visaCategory", children: "Visa Category" }), _jsxs(Select, { value: data['scheduleOI_visa_category'] || '', onValueChange: (value) => handleFieldChange('scheduleOI_visa_category', value), disabled: readOnly, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select visa category" }) }), _jsx(SelectContent, { children: VISA_CATEGORIES.map((visa) => (_jsx(SelectItem, { value: visa.value, children: visa.label }, visa.value))) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "visaNumber", children: "Visa Number (if applicable)" }), _jsx(Input, { id: "visaNumber", value: data['scheduleOI_visa_number'] || '', onChange: (e) => handleFieldChange('scheduleOI_visa_number', e.target.value), placeholder: "e.g., F-1, H-1B", disabled: readOnly })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "entryDate", children: "Date of Entry to U.S. (Current Year)" }), _jsx(Input, { id: "entryDate", type: "date", value: data['scheduleOI_entry_date'] || '', onChange: (e) => handleFieldChange('scheduleOI_entry_date', e.target.value), disabled: readOnly })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "departureDate", children: "Date of Departure from U.S. (if applicable)" }), _jsx(Input, { id: "departureDate", type: "date", value: data['scheduleOI_departure_date'] || '', onChange: (e) => handleFieldChange('scheduleOI_departure_date', e.target.value), disabled: readOnly })] })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "exemptIndividual", checked: data['scheduleOI_exempt_individual'] || false, onCheckedChange: (checked) => handleFieldChange('scheduleOI_exempt_individual', checked), disabled: readOnly }), _jsx(Label, { htmlFor: "exemptIndividual", className: "text-sm", children: "I am an exempt individual (teacher, trainee, student, or professional athlete)" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "closerConnection", checked: data['scheduleOI_closer_connection'] || false, onCheckedChange: (checked) => handleFieldChange('scheduleOI_closer_connection', checked), disabled: readOnly }), _jsx(Label, { htmlFor: "closerConnection", className: "text-sm", children: "I am claiming closer connection to a foreign country" })] })] }), data['scheduleOI_closer_connection'] && (_jsxs("div", { children: [_jsx(Label, { htmlFor: "closerConnectionCountry", children: "Country of Closer Connection" }), _jsx(Input, { id: "closerConnectionCountry", value: data['scheduleOI_closer_connection_country'] || '', onChange: (e) => handleFieldChange('scheduleOI_closer_connection_country', e.target.value), placeholder: "Country name", disabled: readOnly })] }))] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Tax Treaty Information" }), _jsx("p", { className: "text-sm text-gray-600", children: "Tax treaties may reduce or eliminate U.S. tax on certain types of income." })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "treatyBenefits", checked: data['scheduleOI_treaty_benefits'] || false, onCheckedChange: (checked) => handleFieldChange('scheduleOI_treaty_benefits', checked), disabled: readOnly }), _jsx(Label, { htmlFor: "treatyBenefits", className: "text-sm", children: "I am claiming benefits under a tax treaty" })] }), data['scheduleOI_treaty_benefits'] && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "treatyCountry", children: "Treaty Country" }), _jsxs(Select, { value: data['scheduleOI_treaty_country_oi'] || '', onValueChange: (value) => handleFieldChange('scheduleOI_treaty_country_oi', value), disabled: readOnly, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select treaty country" }) }), _jsx(SelectContent, { children: TREATY_COUNTRIES.map((country) => (_jsx(SelectItem, { value: country.value, children: country.label }, country.value))) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "treatyArticle", children: "Treaty Article and Paragraph" }), _jsx(Input, { id: "treatyArticle", value: data['scheduleOI_treaty_article'] || '', onChange: (e) => handleFieldChange('scheduleOI_treaty_article', e.target.value), placeholder: "e.g., Article 20, Paragraph 1", disabled: readOnly })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "treatyBenefitClaimed", children: "Type of Income and Benefit Claimed" }), _jsx(Input, { id: "treatyBenefitClaimed", value: data['scheduleOI_treaty_benefit_claimed'] || '', onChange: (e) => handleFieldChange('scheduleOI_treaty_benefit_claimed', e.target.value), placeholder: "e.g., Scholarship income, reduced withholding rate", disabled: readOnly })] })] }))] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Student/Scholar Information (if applicable)" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "isStudent", checked: data['scheduleOI_is_student'] || false, onCheckedChange: (checked) => handleFieldChange('scheduleOI_is_student', checked), disabled: readOnly }), _jsx(Label, { htmlFor: "isStudent", className: "text-sm", children: "I am a student, teacher, trainee, or researcher" })] }), data['scheduleOI_is_student'] && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "institutionName", children: "Name of Institution" }), _jsx(Input, { id: "institutionName", value: data['scheduleOI_institution_name'] || '', onChange: (e) => handleFieldChange('scheduleOI_institution_name', e.target.value), placeholder: "University or institution name", disabled: readOnly })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "scholarshipIncome", children: "Scholarship/Fellowship Income" }), _jsx(Input, { id: "scholarshipIncome", type: "number", min: "0", step: "0.01", value: data['scheduleOI_scholarship_income'] || '', onChange: (e) => handleFieldChange('scheduleOI_scholarship_income', parseFloat(e.target.value) || 0), placeholder: "0.00", disabled: readOnly })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "yearsInStatus", children: "Years in Student/Scholar Status" }), _jsx(Input, { id: "yearsInStatus", type: "number", min: "0", value: data['scheduleOI_years_in_status'] || '', onChange: (e) => handleFieldChange('scheduleOI_years_in_status', parseInt(e.target.value) || 0), placeholder: "0", disabled: readOnly })] })] })] }))] })] }), calculated.treatyBenefitsApplicable && (_jsxs(Alert, { className: "border-green-200 bg-green-50", children: [_jsx("span", { className: "text-green-600", children: "\u2139\uFE0F" }), _jsxs(AlertDescription, { className: "text-green-800", children: [_jsx("strong", { children: "Treaty Benefits Claimed:" }), " You are claiming benefits under a tax treaty. Make sure to attach Form 8833 if required and keep documentation supporting your treaty claim."] })] })), _jsxs("div", { className: "flex justify-between pt-6", children: [_jsxs(Button, { variant: "outline", onClick: onPrevious, disabled: readOnly, className: "flex items-center space-x-2", children: [_jsx("span", { children: "\u2190" }), _jsx("span", { children: "Back to Personal Info" })] }), _jsxs(Button, { onClick: onNext, disabled: !isFormValid() || readOnly, className: "flex items-center space-x-2", children: [_jsx("span", { children: "Continue to Income" }), _jsx("span", { children: "\u2192" })] })] })] }));
};
export default ResidencyStep;
