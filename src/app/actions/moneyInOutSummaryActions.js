import * as types from './actionTypes';

export function calculateSavings(summaryObj) {
    return {
        type: types.CALCULATE_SAVINGS,
        payload: summaryObj 
    };
}
    

    