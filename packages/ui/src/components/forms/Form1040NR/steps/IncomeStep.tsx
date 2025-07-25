import React from 'react';
import { useDispatch } from 'react-redux';
import { FormSection } from '../../../common/FormSection';
import { CurrencyField } from '../../../common/CurrencyField';
import { InputField } from '../../../common/InputField';
import { Button } from '../../../common/Button';
import { InfoTooltip } from '../../../common/InfoTooltip';
import { CalculatedField } from '../../../common/CalculatedField';
// Icons replaced with Unicode symbols to avoid lucide-react dependency
import { updateField } from '../../../../store/slices/form1040NRSlice';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';

export interface IncomeStepProps {
  data: any;
  calculated: Calculated1040NRValues;
  errors: string[];
  readOnly?: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export const IncomeStep: React.FC<IncomeStepProps> = ({
  data,
  calculated,
  errors,
  readOnly = false,
  onNext,
  onPrevious,
}) => {
  const dispatch = useDispatch();

  const handleFieldChange = (field: string, value: number) => {
    if (!readOnly) {
      dispatch(updateField({ field, value }));
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const isFormValid = () => {
    return calculated.hasEffectivelyConnectedIncome || calculated.hasNonEffectivelyConnectedIncome;
  };

  return (
    <div className="space-y-6">
      {/* Income Overview */}
      <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
        <span className="text-blue-600 text-lg">💰</span>
        <div className="text-blue-800">
          <strong>Income Classification:</strong> Nonresident aliens must distinguish between income that is 
          "effectively connected" with a U.S. trade or business and income that is "not effectively connected." 
          Different tax rates and rules apply to each type.
        </div>
      </div>

      {/* Effectively Connected Income */}
      <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg">🏢</span>
            <span className="text-lg font-semibold">Effectively Connected Income (ECI)</span>
            <span className="px-2 py-1 text-xs border border-green-200 bg-green-50 text-green-700 rounded">
              Taxed at Regular Rates
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Income from a U.S. trade or business, including wages, business income, and certain investment income.
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="wages" className="block text-sm font-medium text-gray-700 mb-1">Wages, Salaries, Tips (Line 1a)</label>
              <input
                id="wages"
                type="number"
                min="0"
                step="0.01"
                value={data['1040NR_line_1a'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('1040NR_line_1a', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.includes('wages') ? 'border-red-500' : 'border-gray-300'}`}
              />
              <p className="text-xs text-gray-600 mt-1">
                From Form W-2, box 1
              </p>
            </div>
            <div>
              <label htmlFor="taxableInterest" className="block text-sm font-medium text-gray-700 mb-1">Taxable Interest (Line 1b)</label>
              <input
                id="taxableInterest"
                type="number"
                min="0"
                step="0.01"
                value={data['1040NR_line_1b'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('1040NR_line_1b', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                Only if effectively connected
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ordinaryDividends" className="block text-sm font-medium text-gray-700 mb-1">Ordinary Dividends (Line 1c)</label>
              <input
                id="ordinaryDividends"
                type="number"
                min="0"
                step="0.01"
                value={data['1040NR_line_1c'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('1040NR_line_1c', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                Only if effectively connected
              </p>
            </div>
            <div>
              <label htmlFor="businessIncome" className="block text-sm font-medium text-gray-700 mb-1">Business Income/Loss (Line 1d)</label>
              <input
                id="businessIncome"
                type="number"
                step="0.01"
                value={data['1040NR_line_1d'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('1040NR_line_1d', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                From Schedule C
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="capitalGains" className="block text-sm font-medium text-gray-700 mb-1">Capital Gains/Losses (Line 1e)</label>
              <input
                id="capitalGains"
                type="number"
                step="0.01"
                value={data['1040NR_line_1e'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('1040NR_line_1e', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                From Schedule D (if effectively connected)
              </p>
            </div>
            <div>
              <label htmlFor="rentalIncome" className="block text-sm font-medium text-gray-700 mb-1">Rental Real Estate Income (Line 1f)</label>
              <input
                id="rentalIncome"
                type="number"
                step="0.01"
                value={data['1040NR_line_1f'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('1040NR_line_1f', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                From Schedule E
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="farmIncome" className="block text-sm font-medium text-gray-700 mb-1">Farm Income/Loss (Line 1g)</label>
              <input
                id="farmIncome"
                type="number"
                step="0.01"
                value={data['1040NR_line_1g'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('1040NR_line_1g', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                From Schedule F
              </p>
            </div>
            <div>
              <label htmlFor="otherECI" className="block text-sm font-medium text-gray-700 mb-1">Other Effectively Connected Income (Line 1h)</label>
              <input
                id="otherECI"
                type="number"
                step="0.01"
                value={data['1040NR_line_1h'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('1040NR_line_1h', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                Specify type in attachments
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-4"></div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-green-800">Total Effectively Connected Income:</span>
              <span className="text-lg font-bold text-green-600">
                {formatCurrency(calculated.totalEffectivelyConnectedIncome)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule NEC - Not Effectively Connected Income */}
      <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg">📈</span>
            <span className="text-lg font-semibold">Not Effectively Connected Income (Schedule NEC)</span>
            <span className="px-2 py-1 text-xs border border-orange-200 bg-orange-50 text-orange-700 rounded">
              Taxed at 30% (or Treaty Rate)
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Investment income and other U.S. source income not connected to a U.S. trade or business.
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="necDividends" className="block text-sm font-medium text-gray-700 mb-1">Dividends (Schedule NEC, Line 1)</label>
              <input
                id="necDividends"
                type="number"
                min="0"
                step="0.01"
                value={data['scheduleNEC_line_1'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('scheduleNEC_line_1', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                From U.S. corporations
              </p>
            </div>
            <div>
              <label htmlFor="necInterest" className="block text-sm font-medium text-gray-700 mb-1">Interest (Schedule NEC, Line 2)</label>
              <input
                id="necInterest"
                type="number"
                min="0"
                step="0.01"
                value={data['scheduleNEC_line_2'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('scheduleNEC_line_2', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                Bank interest, bonds, etc.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="necRoyalties" className="block text-sm font-medium text-gray-700 mb-1">Royalties (Schedule NEC, Line 3)</label>
              <input
                id="necRoyalties"
                type="number"
                min="0"
                step="0.01"
                value={data['scheduleNEC_line_3'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('scheduleNEC_line_3', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                Patents, copyrights, etc.
              </p>
            </div>
            <div>
              <label htmlFor="necOther" className="block text-sm font-medium text-gray-700 mb-1">Other NEC Income (Schedule NEC, Line 4)</label>
              <input
                id="necOther"
                type="number"
                min="0"
                step="0.01"
                value={data['scheduleNEC_line_4'] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange('scheduleNEC_line_4', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                Pensions, annuities, etc.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-4"></div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-orange-800">Total Not Effectively Connected Income:</span>
              <span className="text-lg font-bold text-orange-600">
                {formatCurrency(calculated.totalNECIncome)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-orange-700">Tax on NEC Income (30% or treaty rate):</span>
              <span className="font-semibold text-orange-600">
                {formatCurrency(calculated.necTax)}
              </span>
            </div>
          </div>

          {calculated.totalNECIncome > 0 && (
            <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg flex items-start space-x-3">
              <span className="text-orange-600">ℹ️</span>
              <div className="text-orange-800">
                <strong>Schedule NEC Required:</strong> You have not effectively connected income that will be 
                taxed at 30% (or reduced treaty rate). This income is subject to withholding at the source.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Income Summary */}
      <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Income Summary</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600 font-medium">Effectively Connected</p>
              <p className="text-2xl font-bold text-green-700">
                {formatCurrency(calculated.totalEffectivelyConnectedIncome)}
              </p>
              <p className="text-xs text-green-600 mt-1">Regular tax rates</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-600 font-medium">Not Effectively Connected</p>
              <p className="text-2xl font-bold text-orange-700">
                {formatCurrency(calculated.totalNECIncome)}
              </p>
              <p className="text-xs text-orange-600 mt-1">30% flat rate</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600 font-medium">Total U.S. Income</p>
              <p className="text-2xl font-bold text-blue-700">
                {formatCurrency(calculated.totalEffectivelyConnectedIncome + calculated.totalNECIncome)}
              </p>
              <p className="text-xs text-blue-600 mt-1">All sources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="border border-yellow-200 bg-yellow-50 p-4 rounded-lg flex items-start space-x-3">
        <span className="text-yellow-600">⚠️</span>
        <div className="text-yellow-800">
          <strong>Important Notes:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Income must be properly classified as effectively connected or not effectively connected</li>
            <li>Effectively connected income is subject to regular U.S. tax rates and may qualify for deductions</li>
            <li>Not effectively connected income is generally subject to 30% withholding (or treaty rate)</li>
            <li>Some income may be exempt under tax treaties - claim benefits on Schedule OI</li>
          </ul>
        </div>
      </div>

      {/* Validation Warning */}
      {!calculated.hasEffectivelyConnectedIncome && !calculated.hasNonEffectivelyConnectedIncome && (
        <div className="border border-red-200 bg-red-50 p-4 rounded-lg flex items-start space-x-3">
          <span className="text-red-600">⚠️</span>
          <div className="text-red-800">
            <strong>No Income Reported:</strong> You must report some U.S. source income to file Form 1040-NR. 
            If you have no U.S. income, you may not need to file this form.
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <button
          onClick={onPrevious}
          disabled={readOnly}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>←</span>
          <span>Back to Residency</span>
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid() || readOnly}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Continue to Deductions</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default IncomeStep;