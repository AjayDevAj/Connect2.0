
import { CONSTANT,  } from "../utility/Constant";

const loadfilterdata = (checkboxdata) => ({
    
    type: CONSTANT.FILTER_DATA,checkboxdata
   
   
})

const loadfilterbtnid =(selectedId)=> ({
   
    type:CONSTANT.FILTER_DATA_BTN_ID,selectedId
    
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
    loadfilterbtnid
}