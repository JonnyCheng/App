import { connect } from 'react-redux';


export function bindState(cls) {
    const original = cls.prototype.componentWillUnmount;
    cls.prototype.componentWillUnmount = function () {
        Global.setup = false;
        original && original.call(this)
    }
    return connect(state=>{
        return state
    })(cls)
}
