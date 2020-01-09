import * as types from '../actions/actionTypes';
import initialState from './initialState';

const moneyInReducer = (state = initialState.moneyin, action) => {
    switch (action.type) {
        case types.MONEY_IN_SAVE:
             return Object.assign({}, state, {
                moneyin: action.moneyin
              })
            
            break;

        case types.EDIT_MONEY_IN:
       		return Object.assign({}, state, { [action.field]: action.value})

       	default:
      		return state;
    }
    return state;
};

export default moneyInReducer;