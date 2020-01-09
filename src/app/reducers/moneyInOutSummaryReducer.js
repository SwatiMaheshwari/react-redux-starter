import * as types from '../actions/actionTypes';
import initialState from './initialState';

const moneyInOutSummaryReducer = (state = initialState.summary, action) => {
    
     switch (action.type) { 
             
       case types.MONEY_IN_SAVE:
          let moneyInSum = 0;
          const totalMoneyIn = "totalMoneyIn";
            for(let item in action.payload) {
              moneyInSum += parseInt(action.payload[item]);
            }
          return Object.assign({}, state, {
            totalMoneyIn: moneyInSum
          })
          
        case types.SAVE_MONEY_OUT_DETAILS:
          let moneyOutSum = 0;
          const totalMoneyOut = "totalMoneyOut";
            for(let item in action.payload) {                        
                for(let key in action.payload[item]){
                    if(key != "interestRate")  
                    moneyOutSum += parseInt(action.payload[item][key]);
                }
            }  
          let savingTotal = state.totalMoneyIn - moneyOutSum     
             
          return Object.assign({}, state, { 
            savings : savingTotal, 
            totalMoneyOut: moneyOutSum
          })  
          
          
        default:
          return state
  }
};

export default moneyInOutSummaryReducer;