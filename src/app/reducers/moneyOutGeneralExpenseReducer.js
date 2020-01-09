import initialState from './initialState';

const moneyOutGeneralExpenseReducer = (state = initialState.moneyOut.generalExpense, action) => {
    
     switch (action.type) {
             
        case 'EDIT_MONEY_OUT_DETAILS':       
                
          return Object.assign({}, state, {             
              [action.field]: action.value
          })
          
        default:
          return state
  }
};

export default moneyOutGeneralExpenseReducer;