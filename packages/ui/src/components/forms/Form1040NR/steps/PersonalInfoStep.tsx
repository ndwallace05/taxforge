import React from 'react';
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
// import { ChevronRight, User, Globe, Calendar, AlertTriangle, Info } from 'lucide-react';
import { updateField } from '../../../../store/slices/form1040NRSlice';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';

export interface PersonalInfoStepProps {
  data: any;
  calculated: Calculated1040NRValues;
  errors: string[];
  readOnly?: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

const FILING_STATUS_OPTIONS = [
  { value: 'single', label: 'Single' },
  { value: 'married_filing_separately', label: 'Married Filing Separately' },
  { value: 'qualifying_surviving_spouse', label: 'Qualifying Surviving Spouse' },
];

const COUNTRY_OPTIONS = [
  { value: 'CA', label: 'Canada' },
  { value: 'MX', label: 'Mexico' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'JP', label: 'Japan' },
  { value: 'KR', label: 'South Korea' },
  { value: 'CN', label: 'China' },
  { value: 'IN', label: 'India' },
  { value: 'BR', label: 'Brazil' },
  { value: 'AU', label: 'Australia' },
  { value: 'OTHER', label: 'Other (specify)' },
];

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  data,
  calculated,
  errors,
  readOnly = false,
  onNext,
}) => {
  const dispatch = useDispatch();

  const handleFieldChange = (field: string, value: any) => {
    if (!readOnly) {
      dispatch(updateField({ field, value }));
    }
  };

  const isFormValid = () => {
    return (
      data['1040NR_first_name'] &&
      data['1040NR_last_name'] &&
      data['1040NR_ssn_itin'] &&
      data['1040NR_filing_status'] &&
      data['1040NR_country_of_residence'] &&
      data['1040NR_address_line_1'] &&
      data['1040NR_city'] &&
      data['1040NR_state'] &&
      data['1040NR_zip_code']
    );
  };

  return (
    <div className="space-y-6">
      {/* Nonresident Alien Notice */}
      <Alert className="border-blue-200 bg-blue-50">
        <span className="text-blue-600">🌍</span>
        <AlertDescription className="text-blue-800">
          <strong>Form 1040-NR is for nonresident aliens only.</strong> If you are a U.S. citizen, resident alien, 
          or dual-status alien, you may need to file Form 1040 instead. Consult IRS Publication 519 for guidance.
        </AlertDescription>
      </Alert>

      {/* Primary Taxpayer Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>👤</span>
            <span>Primary Taxpayer Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={data['1040NR_first_name'] || ''}
                onChange={(e) => handleFieldChange('1040NR_first_name', e.target.value)}
                placeholder="Enter first name"
                disabled={readOnly}
                className={errors.includes('first_name') ? 'border-red-500' : ''}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={data['1040NR_last_name'] || ''}
                onChange={(e) => handleFieldChange('1040NR_last_name', e.target.value)}
                placeholder="Enter last name"
                disabled={readOnly}
                className={errors.includes('last_name') ? 'border-red-500' : ''}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ssnItin">SSN or ITIN *</Label>
              <Input
                id="ssnItin"
                value={data['1040NR_ssn_itin'] || ''}
                onChange={(e) => handleFieldChange('1040NR_ssn_itin', e.target.value)}
                placeholder="XXX-XX-XXXX"
                disabled={readOnly}
                className={errors.includes('ssn_itin') ? 'border-red-500' : ''}
              />
              <p className="text-xs text-gray-600 mt-1">
                Most nonresident aliens need an ITIN. Apply using Form W-7 if you don't have one.
              </p>
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={data['1040NR_date_of_birth'] || ''}
                onChange={(e) => handleFieldChange('1040NR_date_of_birth', e.target.value)}
                disabled={readOnly}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="countryOfResidence">Country of Residence *</Label>
            <Select
              value={data['1040NR_country_of_residence'] || ''}
              onValueChange={(value) => handleFieldChange('1040NR_country_of_residence', value)}
              disabled={readOnly}
            >
              <SelectTrigger className={errors.includes('country_of_residence') ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select country of residence" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRY_OPTIONS.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {data['1040NR_country_of_residence'] === 'OTHER' && (
              <Input
                className="mt-2"
                value={data['1040NR_other_country'] || ''}
                onChange={(e) => handleFieldChange('1040NR_other_country', e.target.value)}
                placeholder="Specify other country"
                disabled={readOnly}
              />
            )}
          </div>
        </CardContent>
      </Card>

      {/* U.S. Address */}
      <Card>
        <CardHeader>
          <CardTitle>U.S. Address (if applicable)</CardTitle>
          <p className="text-sm text-gray-600">
            Provide your U.S. address if you have one, or the address where you can be contacted.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="addressLine1">Address Line 1 *</Label>
            <Input
              id="addressLine1"
              value={data['1040NR_address_line_1'] || ''}
              onChange={(e) => handleFieldChange('1040NR_address_line_1', e.target.value)}
              placeholder="Street address"
              disabled={readOnly}
              className={errors.includes('address_line_1') ? 'border-red-500' : ''}
            />
          </div>
          <div>
            <Label htmlFor="addressLine2">Address Line 2</Label>
            <Input
              id="addressLine2"
              value={data['1040NR_address_line_2'] || ''}
              onChange={(e) => handleFieldChange('1040NR_address_line_2', e.target.value)}
              placeholder="Apartment, suite, etc."
              disabled={readOnly}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                value={data['1040NR_city'] || ''}
                onChange={(e) => handleFieldChange('1040NR_city', e.target.value)}
                placeholder="City"
                disabled={readOnly}
                className={errors.includes('city') ? 'border-red-500' : ''}
              />
            </div>
            <div>
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                value={data['1040NR_state'] || ''}
                onChange={(e) => handleFieldChange('1040NR_state', e.target.value)}
                placeholder="State"
                disabled={readOnly}
                className={errors.includes('state') ? 'border-red-500' : ''}
              />
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP Code *</Label>
              <Input
                id="zipCode"
                value={data['1040NR_zip_code'] || ''}
                onChange={(e) => handleFieldChange('1040NR_zip_code', e.target.value)}
                placeholder="ZIP Code"
                disabled={readOnly}
                className={errors.includes('zip_code') ? 'border-red-500' : ''}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filing Status */}
      <Card>
        <CardHeader>
          <CardTitle>Filing Status</CardTitle>
          <p className="text-sm text-gray-600">
            Nonresident aliens have limited filing status options.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="filingStatus">Filing Status *</Label>
            <Select
              value={data['1040NR_filing_status'] || ''}
              onValueChange={(value) => handleFieldChange('1040NR_filing_status', value)}
              disabled={readOnly}
            >
              <SelectTrigger className={errors.includes('filing_status') ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select filing status" />
              </SelectTrigger>
              <SelectContent>
                {FILING_STATUS_OPTIONS.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Filing Status Information */}
          <Alert className="border-yellow-200 bg-yellow-50">
            <span className="text-yellow-600">ℹ️</span>
            <AlertDescription className="text-yellow-800">
              <strong>Note:</strong> Nonresident aliens cannot file as "Married Filing Jointly" or "Head of Household" 
              unless married to a U.S. citizen or resident and making a special election.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Spouse Information (if applicable) */}
      {data['1040NR_filing_status'] === 'married_filing_separately' && (
        <Card>
          <CardHeader>
            <CardTitle>Spouse Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="spouseFirstName">Spouse's First Name</Label>
                <Input
                  id="spouseFirstName"
                  value={data['1040NR_spouse_first_name'] || ''}
                  onChange={(e) => handleFieldChange('1040NR_spouse_first_name', e.target.value)}
                  placeholder="Spouse's first name"
                  disabled={readOnly}
                />
              </div>
              <div>
                <Label htmlFor="spouseLastName">Spouse's Last Name</Label>
                <Input
                  id="spouseLastName"
                  value={data['1040NR_spouse_last_name'] || ''}
                  onChange={(e) => handleFieldChange('1040NR_spouse_last_name', e.target.value)}
                  placeholder="Spouse's last name"
                  disabled={readOnly}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="spouseSsnItin">Spouse's SSN or ITIN</Label>
              <Input
                id="spouseSsnItin"
                value={data['1040NR_spouse_ssn_itin'] || ''}
                onChange={(e) => handleFieldChange('1040NR_spouse_ssn_itin', e.target.value)}
                placeholder="XXX-XX-XXXX"
                disabled={readOnly}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="daysInUS">Days Present in U.S. (Current Year)</Label>
              <Input
                id="daysInUS"
                type="number"
                min="0"
                max="366"
                value={data['1040NR_days_in_us'] || ''}
                onChange={(e) => handleFieldChange('1040NR_days_in_us', parseInt(e.target.value) || 0)}
                placeholder="0"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                Important for substantial presence test
              </p>
            </div>
            <div>
              <Label htmlFor="visaType">Visa Type</Label>
              <Input
                id="visaType"
                value={data['1040NR_visa_type'] || ''}
                onChange={(e) => handleFieldChange('1040NR_visa_type', e.target.value)}
                placeholder="e.g., F-1, H-1B, J-1"
                disabled={readOnly}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="firstTimeNR"
                checked={data['1040NR_first_time_filer'] || false}
                onCheckedChange={(checked) => handleFieldChange('1040NR_first_time_filer', checked)}
                disabled={readOnly}
              />
              <Label htmlFor="firstTimeNR" className="text-sm">
                This is my first time filing Form 1040-NR
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="claimTreatyBenefits"
                checked={data['1040NR_claim_treaty_benefits'] || false}
                onCheckedChange={(checked) => handleFieldChange('1040NR_claim_treaty_benefits', checked)}
                disabled={readOnly}
              />
              <Label htmlFor="claimTreatyBenefits" className="text-sm">
                I am claiming benefits under a tax treaty
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="studentTrainee"
                checked={data['1040NR_student_trainee'] || false}
                onCheckedChange={(checked) => handleFieldChange('1040NR_student_trainee', checked)}
                disabled={readOnly}
              />
              <Label htmlFor="studentTrainee" className="text-sm">
                I am a student, teacher, or trainee (see instructions)
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Substantial Presence Test Warning */}
      {calculated.isSubstantialPresenceTest && (
        <Alert variant="destructive">
          <span>⚠️</span>
          <AlertDescription>
            <strong>Warning:</strong> Based on your days in the U.S., you may meet the substantial presence test 
            ({calculated.substantialPresenceDays.toFixed(1)} days). You might be considered a resident alien for tax purposes. 
            Please review IRS Publication 519 or consult a tax professional.
          </AlertDescription>
        </Alert>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <div></div>
        <Button
          onClick={onNext}
          disabled={!isFormValid() || readOnly}
          className="flex items-center space-x-2"
        >
          <span>Continue to Residency Status</span>
          <span>→</span>
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoStep;