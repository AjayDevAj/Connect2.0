

import { CONSTANT } from "../utility/Constant";

const loadIsImportantData = (conversation_id, is_important) => ({
     type: CONSTANT.IsImportant_Data, conversation_id, is_important
   
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