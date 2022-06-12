

import { CONSTANT } from "../utility/Constant";

const Unassigned_Chat_Reducer = (state = '', action) => {

    if(action.type == CONSTANT.Unassigned_Chat_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.Unassigned_Chat_ERROR) {
        return action.payload;
    } 

    return state;
    

}
export default Unassigned_Chat_Reducer;