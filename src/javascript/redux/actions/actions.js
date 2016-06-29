import history from './../../common/history';

$(document).ajaxSuccess(function (e, xml, options) {
    try {
        var data = $.parseJSON(xml.responseText)
        if (data.code != 0) {
            switch (data.code) {
                case CONSTANTS.Error.USER_HAS_NOT_PASSWORD :
                    history.replaceState(null,CONSTANTS.ROUTER.CONFIRM_PASSWORD)
                    return;
                case CONSTANTS.Error.HAS_LOGGED :
                    history.replaceState(null,CONSTANTS.ROUTER.HOME)
                    return;
            }
        };
    } catch (e) {}
})

export const CONSTANTS = {
    ROUTER : {
        HOME                : '/',
        STANDARD            : '/standard',
        LIST                : '/modules'
    },
    Error : {
        ERROR_UNKNOWN           : -1000,
        NOT_LOGIN               : -1001,
        PARAM_ERROR             : -1002,
        PASSWORD_DOES_NOT_MATCH : -1003,
        DATABASE_ERROR          : -1004,
        USER_DOSE_NOT_EXIST     : -1005,
        NOT_ALLOWED             : -1006,
        USER_ALREADY_EXISTS     : -1007,
        NOT_FOUND               : -1008,
        USER_HAS_NOT_PASSWORD   : -1009,
        LOGIN_FAIL              : -1010,
        HAS_LOGGED              : -1011,
        INVALID_TOKEN           : -1012
    }
}

export function getUserList() {
    return function (dispatch,getState) {
        $.get('/users',function (d) {
            if (d.code == 0) {
                dispatch(userList(d.data))
            };
        })
    }
}