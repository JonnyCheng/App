import React,{Component} from 'react';
import { Link } from 'react-router';
import { bindState } from './../common/decorators';
import * as Actions from './../redux/actions/actions';

import ModuleList from './../components/list/index';

export default class List extends Component{

    constructor(props) {
        super(props)
    }

  	render() {

    	return (
    		<div>
    			<ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
    		</div>
    	)
  	}
  	
}