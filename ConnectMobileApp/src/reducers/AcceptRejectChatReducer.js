
/****** Common react packages import****/

import { CONSTANT } from "../utility/Constant";

const AcceptRejectChatDataReducer = (state = '', action) => {

    if(action.type == CONSTANT.ACCEPT_REJECT_CHAT_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.ACCEPT_REJECT_CHAT_ERROR) {
        return action.payload;
    } 

    return state;
    

}
export default AcceptRejectChatDataReducer;