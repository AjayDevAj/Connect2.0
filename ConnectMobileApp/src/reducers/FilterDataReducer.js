import { CONSTANT } from "../utility/Constant";
import { combineReducers } from "redux";

const FilterDataReducer = (state = '', action) => {
   

    if(action.type == CONSTANT.FILTER_SUCCESS) {
       
        return action.payload;
    }

    if(action.type == CONSTANT.FILTER_DATA_BTN_ID_SUCCESS) {
       
        return action.payload;
    }
    if (action.type == CONSTANT.FILTER_ERROR) {
        return action.payload;
    }
    return state;

}
export default FilterDataReducer;


