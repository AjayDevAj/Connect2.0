import {CONSTANT} from '../utility/Constant';

const loadofferlistdata = (master_outlet_id, store_code) => ({
  type: CONSTANT.OFFER_LIST_DATA,
  master_outlet_id,
  store_code,
});

const getError = payload => ({
  type: CONSTANT.OFFER_LIST_DATA_ERROR,
  payload,
});

const getResponse = payload => ({
  type: CONSTANT.OFFER_LIST_DATA_SUCCESS,
  payload,
});

export {loadofferlistdata, getError, getResponse};
