import * as types from './actionTypes';

export function saveMoneyIn(moneyin) {
    return {
        type: types.MONEY_IN_SAVE,
        payload: moneyin 
    };
}


export function editMoneyIn(field, value) {
  return { type: types.EDIT_MONEY_IN, field, value};
}