import { combineReducers } from 'redux';
import * as Actions from './../actions/actions';

import Immutable from 'immutable';


function getList(state=Immutable.fromJS(),action) {
    switch (action.type) {
        default :
            return state
    }
}


export default combineReducers({
    getList
})
