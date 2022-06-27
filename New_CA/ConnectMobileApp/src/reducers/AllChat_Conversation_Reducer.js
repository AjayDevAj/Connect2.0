

import { CONSTANT } from "../utility/Constant";

const allChat_Conversation_Reducer = (state = '', action) => {

    if(action.type == CONSTANT.loadAllChat_Conversation_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.loadAllChat_Conversation_ERROR) {
        return action.payload;
    } 

    return state;
    

}
export default allChat_Conversation_Reducer;