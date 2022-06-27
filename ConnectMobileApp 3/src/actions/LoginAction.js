
import { CONSTANT } from "../containers/Constant";

const loadLoginData = (mobileNumber) => ({
    type: CONSTANT.LOGIN_DATA,mobileNumber
})

const getError = payload => ({
    type: CONSTANT.DATA_ERROR,
    payload
})

const getResponse = payload => ({
    type: CONSTANT.DATA_SUCCESS,
    payload
})

export {
    loadLoginData,
    getError,
    getResponse
}