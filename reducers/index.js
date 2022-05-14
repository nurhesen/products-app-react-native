import { combineReducers } from "redux";
import { dataReducer, dataDetailReducer } from "./dataReducer";

const rootReducer = combineReducers({
  appData: dataReducer,
  appDataDetail: dataDetailReducer,
});

export default rootReducer;
