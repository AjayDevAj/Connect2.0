import React from 'react';

export const initialLoginState = {
    isLoading: true,
    isAppInstalledFirstTime: false,
    userToken: null
}

export default authReducer = (prevState, action) => {
    switch(action.type) {
        case 'onboarding':
            return {
                ...prevState,
                userToken: action.token,
                isAppInstalledFirstTime: true,
                isLoading: false
            };
        case 'login':
            return {
                ...prevState,
                userToken: action.token,
                isAppInstalledFirstTime: false,
                isLoading: false
            };
        case 'logout':
            return {
                ...prevState,
                userToken: null,
                isAppInstalledFirstTime: false,
                isLoading: false
            };
        default:
            return state;
    }
}