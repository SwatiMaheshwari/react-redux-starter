import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import moneyIn from "./reducers/moneyInReducer";
import moneyOut from "./reducers/moneyOutReducer";
import summary from "./reducers/moneyInOutSummaryReducer";

export default createStore(
    combineReducers({        
        moneyIn,
        moneyOut,
        summary
    }),
    {},
    applyMiddleware(logger(), thunk)
);