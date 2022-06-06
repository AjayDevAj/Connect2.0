
import { CONSTANT } from "../utility/Constant";

const loadStoreLocationData = () => ({
    type: CONSTANT.STORE_LOCATION_DATA,
    
})

const getError = payload => ({
    type: CONSTANT.STORE_ERROR,
    payload
})

const getResponse = payload => ({
    type: CONSTANT.STORE_SUCCESS,
    payload
})

export {
    loadStoreLocationData,
    getError,
    getResponse,
    
}

