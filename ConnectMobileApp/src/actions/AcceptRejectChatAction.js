


/*
**
*
** import constant data (common data used in overall projects)
*
** 
*/

import { CONSTANT } from "../utility/Constant";

/********** In loadAccept_RejectChat_Data method to pass two Parameter 
  "conversation_id" as string value , "is_important" as int value...   *********/

const loadAccept_RejectChat_Data = (conversation_id, is_important) => ({
    type: CONSTANT.ACCEPT_REJECT_CHAT_DATA,conversation_id, is_important
})

const getAccept_RejectChat_Error = payload => ({
    type: CONSTANT.ACCEPT_REJECT_CHAT_ERROR,
    payload
})

const getAccept_RejectChat_Response = payload => ({
    type: CONSTANT.ACCEPT_REJECT_CHAT_SUCCESS,
    payload
})

export {
    loadAccept_RejectChat_Data,
    getAccept_RejectChat_Error,
    getAccept_RejectChat_Response,
}