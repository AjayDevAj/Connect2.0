
import { CONSTANT } from "../utility/Constant";
import { combineReducers } from "redux";

const StoreLocationDataReducer = (state = '', action) => {

    if(action.type == CONSTANT.DATA_SUCCESS) {
        return action.payload;

    }
    if (action.type == CONSTANT.DATA_ERROR) {
        return action.payload;
    }
    return state;

}

const rootReducers = combineReducers({
    StoreLocationDataResponse: StoreLocationDataReducer,
})

export default rootReducers;
