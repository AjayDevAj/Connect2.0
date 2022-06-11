

import { CONSTANT } from "../utility/Constant";

const storeLocationDataReducer = (state = '', action) => {

    if(action.type == CONSTANT.STORE_LOCATION_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.STORE_LOCATION_ERROR) {
        return action.payload;
    } else{
        return state;
    }


}
export default storeLocationDataReducer;