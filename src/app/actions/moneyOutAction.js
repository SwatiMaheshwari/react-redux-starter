import * as types from './actionTypes';

export function saveMoneyOutDetails(moneyOutObj) {
    return {
        type: types.SAVE_MONEY_OUT_DETAILS,
        payload: moneyOutObj 
    };
}
        
export function editMoneyOutDetails(field, value) {
  return { 
      type: types.EDIT_MONEY_OUT_DETAILS, 
      field, 
      value
  };
}
    
export function editMoneyOutLoanDetails(field, value) {
  return { 
      type: types.EDIT_MONEY_OUT_LOAN_DETAILS, 
      field, 
      value
  };
}
    
    
    