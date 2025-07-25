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
// import { ChevronLeft, ChevronRight, Globe, Calendar, AlertTriangle, Info, Calculator } from 'lucide-react';
import { updateField } from '../../../../store/slices/form1040NRSlice';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';

export interface ResidencyStepProps {
  data: any;
  calculated: Calculated1040NRValues;
  errors: string[];
  readOnly?: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

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

export const ResidencyStep: React.FC<ResidencyStepProps> = ({
  data,
  calculated,
  errors,
  readOnly = false,
  onNext,
  onPrevious,
}) => {
  const dispatch = useDispatch();

  const handleFieldChange = (field: string, value: any) => {
    if (!readOnly) {
      dispatch(updateField({ field, value }));
    }
  };

  const isFormValid = () => {
    return (
      data['scheduleOI_days_present_current_year'] !== undefined &&
      data['scheduleOI_days_present_prior_year_1'] !== undefined &&
      data['scheduleOI_days_present_prior_year_2'] !== undefined
    );
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
    } else if (calculated.substantialPresenceDays >= 150) {
      return {
        status: 'Close',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        message: 'You are close to meeting the substantial presence test.'
      };
    } else {
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

  return (
    <div className="space-y-6">
      {/* Residency Status Overview */}
      <Alert className="border-blue-200 bg-blue-50">
        <span className="text-blue-600">🌍</span>
        <AlertDescription className="text-blue-800">
          <strong>Residency Status Determination:</strong> This step helps determine your tax residency status 
          and whether you qualify to file Form 1040-NR. Your residency status affects your tax obligations and available deductions.
        </AlertDescription>
      </Alert>

      {/* Substantial Presence Test */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>🧮</span>
            <span>Substantial Presence Test</span>
          </CardTitle>
          <p className="text-sm text-gray-600">
            The substantial presence test determines if you are considered a U.S. resident for tax purposes.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="currentYearDays">Days in U.S. - 2024 (Current Year)</Label>
              <Input
                id="currentYearDays"
                type="number"
                min="0"
                max="366"
                value={data['scheduleOI_days_present_current_year'] || ''}
                onChange={(e) => handleFieldChange('scheduleOI_days_present_current_year', parseInt(e.target.value) || 0)}
                placeholder="0"
                disabled={readOnly}
                className={errors.includes('current_year_days') ? 'border-red-500' : ''}
              />
              <p className="text-xs text-gray-600 mt-1">Full weight (×1)</p>
            </div>
            <div>
              <Label htmlFor="priorYear1Days">Days in U.S. - 2023</Label>
              <Input
                id="priorYear1Days"
                type="number"
                min="0"
                max="366"
                value={data['scheduleOI_days_present_prior_year_1'] || ''}
                onChange={(e) => handleFieldChange('scheduleOI_days_present_prior_year_1', parseInt(e.target.value) || 0)}
                placeholder="0"
                disabled={readOnly}
                className={errors.includes('prior_year_1_days') ? 'border-red-500' : ''}
              />
              <p className="text-xs text-gray-600 mt-1">1/3 weight (×0.33)</p>
            </div>
            <div>
              <Label htmlFor="priorYear2Days">Days in U.S. - 2022</Label>
              <Input
                id="priorYear2Days"
                type="number"
                min="0"
                max="366"
                value={data['scheduleOI_days_present_prior_year_2'] || ''}
                onChange={(e) => handleFieldChange('scheduleOI_days_present_prior_year_2', parseInt(e.target.value) || 0)}
                placeholder="0"
                disabled={readOnly}
                className={errors.includes('prior_year_2_days') ? 'border-red-500' : ''}
              />
              <p className="text-xs text-gray-600 mt-1">1/6 weight (×0.17)</p>
            </div>
          </div>

          <Separator />

          {/* Substantial Presence Test Result */}
          <div className={`p-4 rounded-lg border ${substantialPresenceStatus.bgColor} ${substantialPresenceStatus.borderColor}`}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">Substantial Presence Test Result</h4>
              <Badge variant="outline" className={`${substantialPresenceStatus.color} border-current`}>
                {substantialPresenceStatus.status}
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Weighted Days Calculation:</p>
                <p className="font-mono">
                  {data['scheduleOI_days_present_current_year'] || 0} + 
                  {Math.round((data['scheduleOI_days_present_prior_year_1'] || 0) / 3)} + 
                  {Math.round((data['scheduleOI_days_present_prior_year_2'] || 0) / 6)} = 
                  <span className={`font-bold ${substantialPresenceStatus.color}`}>
                    {calculated.substantialPresenceDays.toFixed(1)} days
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-600">Status:</p>
                <p className={`font-semibold ${substantialPresenceStatus.color}`}>
                  {substantialPresenceStatus.message}
                </p>
              </div>
            </div>
          </div>

          {calculated.isSubstantialPresenceTest && (
            <Alert variant="destructive">
              <span className="text-yellow-600">⚠️</span>
              <AlertDescription>
                <strong>Important:</strong> You may meet the substantial presence test and be considered a resident alien. 
                Consider the closer connection exception or consult a tax professional. You may need to file Form 1040 instead.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Visa and Immigration Status */}
      <Card>
        <CardHeader>
          <CardTitle>Visa and Immigration Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="visaCategory">Visa Category</Label>
              <Select
                value={data['scheduleOI_visa_category'] || ''}
                onValueChange={(value) => handleFieldChange('scheduleOI_visa_category', value)}
                disabled={readOnly}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select visa category" />
                </SelectTrigger>
                <SelectContent>
                  {VISA_CATEGORIES.map((visa) => (
                    <SelectItem key={visa.value} value={visa.value}>
                      {visa.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="visaNumber">Visa Number (if applicable)</Label>
              <Input
                id="visaNumber"
                value={data['scheduleOI_visa_number'] || ''}
                onChange={(e) => handleFieldChange('scheduleOI_visa_number', e.target.value)}
                placeholder="e.g., F-1, H-1B"
                disabled={readOnly}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="entryDate">Date of Entry to U.S. (Current Year)</Label>
              <Input
                id="entryDate"
                type="date"
                value={data['scheduleOI_entry_date'] || ''}
                onChange={(e) => handleFieldChange('scheduleOI_entry_date', e.target.value)}
                disabled={readOnly}
              />
            </div>
            <div>
              <Label htmlFor="departureDate">Date of Departure from U.S. (if applicable)</Label>
              <Input
                id="departureDate"
                type="date"
                value={data['scheduleOI_departure_date'] || ''}
                onChange={(e) => handleFieldChange('scheduleOI_departure_date', e.target.value)}
                disabled={readOnly}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="exemptIndividual"
                checked={data['scheduleOI_exempt_individual'] || false}
                onCheckedChange={(checked) => handleFieldChange('scheduleOI_exempt_individual', checked)}
                disabled={readOnly}
              />
              <Label htmlFor="exemptIndividual" className="text-sm">
                I am an exempt individual (teacher, trainee, student, or professional athlete)
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="closerConnection"
                checked={data['scheduleOI_closer_connection'] || false}
                onCheckedChange={(checked) => handleFieldChange('scheduleOI_closer_connection', checked)}
                disabled={readOnly}
              />
              <Label htmlFor="closerConnection" className="text-sm">
                I am claiming closer connection to a foreign country
              </Label>
            </div>
          </div>

          {data['scheduleOI_closer_connection'] && (
            <div>
              <Label htmlFor="closerConnectionCountry">Country of Closer Connection</Label>
              <Input
                id="closerConnectionCountry"
                value={data['scheduleOI_closer_connection_country'] || ''}
                onChange={(e) => handleFieldChange('scheduleOI_closer_connection_country', e.target.value)}
                placeholder="Country name"
                disabled={readOnly}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tax Treaty Information */}
      <Card>
        <CardHeader>
          <CardTitle>Tax Treaty Information</CardTitle>
          <p className="text-sm text-gray-600">
            Tax treaties may reduce or eliminate U.S. tax on certain types of income.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="treatyBenefits"
              checked={data['scheduleOI_treaty_benefits'] || false}
              onCheckedChange={(checked) => handleFieldChange('scheduleOI_treaty_benefits', checked)}
              disabled={readOnly}
            />
            <Label htmlFor="treatyBenefits" className="text-sm">
              I am claiming benefits under a tax treaty
            </Label>
          </div>

          {data['scheduleOI_treaty_benefits'] && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="treatyCountry">Treaty Country</Label>
                <Select
                  value={data['scheduleOI_treaty_country_oi'] || ''}
                  onValueChange={(value) => handleFieldChange('scheduleOI_treaty_country_oi', value)}
                  disabled={readOnly}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select treaty country" />
                  </SelectTrigger>
                  <SelectContent>
                    {TREATY_COUNTRIES.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="treatyArticle">Treaty Article and Paragraph</Label>
                <Input
                  id="treatyArticle"
                  value={data['scheduleOI_treaty_article'] || ''}
                  onChange={(e) => handleFieldChange('scheduleOI_treaty_article', e.target.value)}
                  placeholder="e.g., Article 20, Paragraph 1"
                  disabled={readOnly}
                />
              </div>

              <div>
                <Label htmlFor="treatyBenefitClaimed">Type of Income and Benefit Claimed</Label>
                <Input
                  id="treatyBenefitClaimed"
                  value={data['scheduleOI_treaty_benefit_claimed'] || ''}
                  onChange={(e) => handleFieldChange('scheduleOI_treaty_benefit_claimed', e.target.value)}
                  placeholder="e.g., Scholarship income, reduced withholding rate"
                  disabled={readOnly}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Student/Scholar Information */}
      <Card>
        <CardHeader>
          <CardTitle>Student/Scholar Information (if applicable)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="isStudent"
              checked={data['scheduleOI_is_student'] || false}
              onCheckedChange={(checked) => handleFieldChange('scheduleOI_is_student', checked)}
              disabled={readOnly}
            />
            <Label htmlFor="isStudent" className="text-sm">
              I am a student, teacher, trainee, or researcher
            </Label>
          </div>

          {data['scheduleOI_is_student'] && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="institutionName">Name of Institution</Label>
                <Input
                  id="institutionName"
                  value={data['scheduleOI_institution_name'] || ''}
                  onChange={(e) => handleFieldChange('scheduleOI_institution_name', e.target.value)}
                  placeholder="University or institution name"
                  disabled={readOnly}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="scholarshipIncome">Scholarship/Fellowship Income</Label>
                  <Input
                    id="scholarshipIncome"
                    type="number"
                    min="0"
                    step="0.01"
                    value={data['scheduleOI_scholarship_income'] || ''}
                    onChange={(e) => handleFieldChange('scheduleOI_scholarship_income', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    disabled={readOnly}
                  />
                </div>
                <div>
                  <Label htmlFor="yearsInStatus">Years in Student/Scholar Status</Label>
                  <Input
                    id="yearsInStatus"
                    type="number"
                    min="0"
                    value={data['scheduleOI_years_in_status'] || ''}
                    onChange={(e) => handleFieldChange('scheduleOI_years_in_status', parseInt(e.target.value) || 0)}
                    placeholder="0"
                    disabled={readOnly}
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Treaty Benefits Summary */}
      {calculated.treatyBenefitsApplicable && (
        <Alert className="border-green-200 bg-green-50">
          <span className="text-green-600">ℹ️</span>
          <AlertDescription className="text-green-800">
            <strong>Treaty Benefits Claimed:</strong> You are claiming benefits under a tax treaty. 
            Make sure to attach Form 8833 if required and keep documentation supporting your treaty claim.
          </AlertDescription>
        </Alert>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={readOnly}
          className="flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Personal Info</span>
        </Button>
        <Button
          onClick={onNext}
          disabled={!isFormValid() || readOnly}
          className="flex items-center space-x-2"
        >
          <span>Continue to Income</span>
          <span>→</span>
        </Button>
      </div>
    </div>
  );
};

export default ResidencyStep;