
import { CONSTANT } from "../utility/Constant";

const loadStoreLocationData = () => ({
     type: CONSTANT.STORE_LOCATION_DATA
   
})

const getStoreLocationError = payload => ({
    type: CONSTANT.STORE_LOCATION_ERROR,
    payload
})

const getStoreLocationResponse = payload => ({
    type: CONSTANT.STORE_LOCATION_SUCCESS,
    payload
})


export {
    loadStoreLocationData,
    getStoreLocationError,
    getStoreLocationResponse,
}