import {CONSTANT} from '../utility/Constant';

const loadpostlistdata = (
  location_id,
 
) => ({
  type: CONSTANT.POST_LIST_DATA,
  location_id,
 
});

const getError = payload => ({
  type: CONSTANT.POST_DATA_ERROR,
  payload,
});

const getResponse = payload => ({
  type: CONSTANT.POST_LIST_DATA_SUCCESS,
  payload,
});

export {loadpostdata, getError, getResponse};
