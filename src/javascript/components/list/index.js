import React, {Component,PropTypes} from 'react';
import Immutable from 'immutable';

const noop = function() {}


export default class ModuleList extends Component {

    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps) {
        return this.props.modules != nextProps.modules || this.props.customClassName != nextProps.customClassName;
    }

    clickEvent(id) {
        return () => {
            this.props.clickEvent(id)
        }
    }

    userModel(id) {
        return (e) =>{
            e.stopPropagation();
            this.props.userModel(id);            
        }
    }

    parseDate(time){
        if (time == null) return '';
        var date = new Date(time);
        return date.getFullYear() + '-' + this.dateLink(date.getMonth() + 1) + '-' + this.dateLink(date.getDate()) + ' ' + this.dateLink(date.getHours()) + ':' + this.dateLink(date.getMinutes()) + ':' + this.dateLink(date.getSeconds());
    }

    dateLink(num) {
        return num < 10 ? '0' + num : num;
    }

    toSearch(value) {
        return (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.props.search(value);
        }
    }

    render() {

        const data = this.props.modules.get('data');
        const page = this.props.modules.get('page');
        const This = this;

        return (
            <div>
                <ul className="module-lists clearfix">
                { data.map(function (item,key) {
                    const packageInfo = JSON.parse(decodeURIComponent(item.get('package')));
                    return (
                        <li className="module-item" key={key} onClick={this.clickEvent(item.get('id'))}>
                            <div className="clearfix header">
                                <a href="javascript:;" className="modulename">
                                <i className="material-icons">view_quilt</i>
                                    {item.get('name')}
                                </a>
                            </div>
                            <div className="info">
                                <div className="module-tag">
                                    <p className="tagname">
                                        关键字：    
                                        {!!packageInfo.keywords ? packageInfo.keywords.map(function(k,i){
                                            return(<a href="javascript:;" className="tagsname" key={i} onClick={This.toSearch(k)}>{k}</a>)
                                        }) : ''}             
                                    </p>   
                                </div>  
                                <div className="time-version">                                    
                                    <div className="module-time">
                                        <p>发布时间：<span className="time">{this.parseDate(item.get('publish_time'))}</span></p>
                                    </div>                             
                                    <div className="module-version">
                                        <p className="mv-name">版本号：<span className="des">{packageInfo.version}</span></p>
                                    </div>
                                    <div className="module-maintain">
                                        <p className="maintain-name">维护者：
                                            {packageInfo.maintainers.map(function(k,i){
                                                if (i>0) {
                                                    return(<span className="mn" key={i}>{k}</span>)
                                                }else{
                                                    return(<span className="null" key={0}>无</span>)
                                                }
                                            })}
                                        </p>
                                    </div>
                                </div>
                                <div className="module-ab clearfix">
                                    <p className="mab-name">模块简介：</p>                                    
                                    <p className="mab-info des">{item.get('description')}</p>
                                </div>           
                            </div>
                        </li>
                    )
                }, this) }
                </ul>
            </div>
        );
    }

};

ModuleList.defaultProps = {
    customClassName : '',
    modules         : Immutable.Map(),
    getModules      : noop,
    clickEvent      : noop,
    userModel       : noop,
    search          : noop
}

ModuleList.propTypes = {
    customClassName : PropTypes.string,
    modules         : PropTypes.object,
    getModules      : PropTypes.func,
    clickEvent      : PropTypes.func,
    userModel       : PropTypes.func,
    search          : PropTypes.func
}