

import { CONSTANT } from "../utility/Constant";

const Send_Message_Reducer = (state = '', action) => {

    if(action.type == CONSTANT.Send_message_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.Send_message_ERROR) {
        return action.payload;
    }

    return state;
}

export default Send_Message_Reducer;