import { CONSTANT } from "../utility/Constant";

const send_Chat_Message_Data = (modeType='google',conversation_id,sub_conversation_id,message=null, media_type = null,
file = null,) => ({
    type: CONSTANT.Send_message_DATA,modeType,conversation_id,sub_conversation_id,message,media_type,file
})

const send_Chat_Message_Data_Error = payload => ({
    type: CONSTANT.Send_message_ERROR,
    payload
})

const send_Chat_Message_Data_Response = payload => ({
    type: CONSTANT.Send_message_SUCCESS,
    payload
})


export {
    send_Chat_Message_Data,
    send_Chat_Message_Data_Error,
    send_Chat_Message_Data_Response,
}