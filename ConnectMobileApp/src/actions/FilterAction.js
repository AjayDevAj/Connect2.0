
import { CONSTANT } from "../utility/Constant";

const loadfilterdata = (checkboxdata) => ({
    
    type: CONSTANT.FILTER_DATA,checkboxdata
   
   
})

const getError = payload => ({
    type: CONSTANT.FILTER_ERROR,
    payload
})

const getResponse = payload => ({
    type: CONSTANT.FILTER_SUCCESS,
    payload
})

export {
    loadfilterdata,
    getError,
    getResponse,
}