
import { CONSTANT } from "../utility/Constant";

const loadStoreLocationData = () => ({
    type: CONSTANT.STORE_LOCATION_DATA,
    payload:{items}
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
    loadStoreLocationData,
    getError,
    getResponse,
    
}

