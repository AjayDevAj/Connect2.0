import {CONSTANT} from '../utility/Constant';

const loadpostdata = (
  location_id,
  message,
  picture_url,
  link,
  call_to_action,
) => ({
  type: CONSTANT.POST_DATA,
  location_id,
  message,
  picture_url,
  link,
  call_to_action,
});

const getError = payload => ({
  type: CONSTANT.POST_DATA_ERROR,
  payload,
});

const getResponse = payload => ({
  type: CONSTANT.POST_DATA_SUCCESS,
  payload,
});

export {loadpostdata, getError, getResponse};
