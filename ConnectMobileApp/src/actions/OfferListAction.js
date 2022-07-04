import {CONSTANT} from '../utility/Constant';

const loadpostlistdata = (master_outlet_id, store_code) => ({
  type: CONSTANT.POST_LIST_DATA,
  master_outlet_id,
  store_code,
});

const getError = payload => ({
  type: CONSTANT.POST_DATA_ERROR,
  payload,
});

const getResponse = payload => ({
  type: CONSTANT.POST_LIST_DATA_SUCCESS,
  payload,
});

export {loadpostlistdata, getError, getResponse};
