import React,{Component} from 'react';
import { Link } from 'react-router';

export default class Layout extends Component{

  	render() {
  		return (
		    <div>
		        <h1>Test Demo</h1>
		        <ul role="nav">
		          	<li><Link to="/list">List!!</Link></li>
		        </ul>
		    </div>
		)
  	}
  	
}