/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: ChatReducer.js
** UsedFor: Post Reducer at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**               Post Reducer component
** ==========================================================
*
**
*/


/*
**
*
** Common react packages import
*
** 
*/

import { CONSTANT } from "../utility/Constant";

const PostReducer = (state = '', action) => {

    if(action.type == CONSTANT.POST_DATA_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.POST_DATA_ERROR) {
        return action.payload;
    }

    return state;
}

export default PostReducer;