import {combineReducers} from "redux";
import moneyOutInfo from "./moneyOutInfoReducer";
import loanDetails from "./moneyOutLoanReducer";
import generalExpense from "./moneyOutGeneralExpenseReducer";

export default combineReducers({
  loanDetails,
  generalExpense
});