import initialState from './initialState';

const moneyOutInfoReducer = (state = initialState.moneyOut, action) => {
    
     switch (action.type) {
        case 'SAVE_MONEY_OUT_DETAILS':
          return Object.assign({}, state, {
            ...action.payload
          })
          
        default:
          return state
  }
};

export default moneyOutInfoReducer;