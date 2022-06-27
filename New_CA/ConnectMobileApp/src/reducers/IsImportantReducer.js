

import { CONSTANT } from "../utility/Constant";

const isImportantDataReducer = (state = '', action) => {

    if(action.type == CONSTANT.IsImportant_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.IsImportant_ERROR) {
        return action.payload;
    } 

    return state;
    

}
export default isImportantDataReducer;