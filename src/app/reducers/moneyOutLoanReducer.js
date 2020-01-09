import initialState from './initialState';

const moneyOutLoanReducer = (state = initialState.moneyOut.loanDetails, action) => {
    
     switch (action.type) {
                 
        case 'EDIT_MONEY_OUT_LOAN_DETAILS':               
          return Object.assign({}, state, {             
              [action.field]: action.value
          })
          
        default:
          return state
  }
};

export default moneyOutLoanReducer;