import { useSelector } from 'react-redux';
import { selectForm1040Data } from '../store/slices/form1040Slice';

/**
 * Hook for auto-calculated Form 1040 lines
 * Provides real-time calculations for dependent fields
 */
export const useCalculated1040 = () => {
  const data = useSelector(selectForm1040Data);

  return {
    // Line 9: Capital gain or (loss) (Schedule D)
    '1040_line_9': (data['1040_line_7'] || 0) + (data['1040_line_8'] || 0),
    
    // Line 11: Adjusted gross income
    '1040_line_11': (data['1040_line_9'] || 0) - (data['1040_line_10'] || 0),
    
    // Line 24: Total income
    '1040_line_24': (
      (data['1040_line_1a'] || 0) +
      (data['1040_line_1b'] || 0) +
      (data['1040_line_2a'] || 0) +
      (data['1040_line_2b'] || 0) +
      (data['1040_line_3a'] || 0) +
      (data['1040_line_3b'] || 0) +
      (data['1040_line_4a'] || 0) +
      (data['1040_line_4b'] || 0) +
      (data['1040_line_5a'] || 0) +
      (data['1040_line_5b'] || 0) +
      (data['1040_line_6a'] || 0) +
      (data['1040_line_6b'] || 0) +
      (data['1040_line_7'] || 0) +
      (data['1040_line_8'] || 0)
    ),
    
    // Line 33: Total payments
    '1040_line_33': (
      (data['1040_line_25a'] || 0) +
      (data['1040_line_25b'] || 0) +
      (data['1040_line_25c'] || 0) +
      (data['1040_line_25d'] || 0) +
      (data['1040_line_26'] || 0) +
      (data['1040_line_27'] || 0) +
      (data['1040_line_28'] || 0) +
      (data['1040_line_29'] || 0) +
      (data['1040_line_30'] || 0) +
      (data['1040_line_31'] || 0) +
      (data['1040_line_32'] || 0)
    ),
    
    // Line 35: Amount you owe
    '1040_line_35': Math.max(0, (data['1040_line_24'] || 0) - (data['1040_line_33'] || 0)) + (data['1040_line_34'] || 0), // Total amount owed
    
    // Line 36: Estimated tax penalty
    '1040_line_36': (data['1040_line_34'] || 0), // Estimated tax penalty
    
    // Line 37: Amount you owe (line 35 + line 36)
    '1040_line_37': (data['1040_line_35'] || 0), // Total amount owed (same as line 35)
    
    // Line 38: Refund amount
    '1040_line_38': Math.max(0, (data['1040_line_30'] || 0) - (data['1040_line_31'] || 0) - (data['1040_line_32'] || 0)) // Final refund amount
  };
};

export default useCalculated1040;