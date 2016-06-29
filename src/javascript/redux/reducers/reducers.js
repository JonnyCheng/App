import { combineReducers } from 'redux';
import * as Actions from './../actions/actions';

import Immutable from 'immutable';

function modules(state=Immutable.fromJS({current:0,data:[],page:{},searchValue:''}), action) {
    switch (action.type) {
        case Actions.CONSTANTS.MODULES.ALL :
            return Immutable.fromJS(action.data);
        default : 
            return state;
    }
}

export default combineReducers({
    modules
})
