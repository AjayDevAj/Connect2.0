

import { CONSTANT } from "../utility/Constant";

/********** In loadAccept_RejectChat_Data method to pass two Parameter 
  "conversation_id" as string value , "is_important" as int value...   *********/

const loadIsImportantData = (conversation_id, is_important) => ({
     type: CONSTANT.IsImportant_Data,conversation_id,is_important
   
})

const getIsImportantError = payload => ({
    type: CONSTANT.IsImportant_ERROR,
    payload
})

const getIsImportantResponse = payload => ({
    type: CONSTANT.IsImportant_SUCCESS,
    payload
})


export {
    loadIsImportantData,
    getIsImportantError,
    getIsImportantResponse,
}