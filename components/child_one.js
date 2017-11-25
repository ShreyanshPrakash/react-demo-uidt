import React from 'react';
import ReactDOM from 'react-dom';
import ChildTwo from './child_two.js';
import '../Css/child_style.css';

export default class ChildOne extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {Name:"Doe"};
  	console.log(this.props);

  	
  }
  componentWillMount(){
  	console.log("will mount");
  	
  		
  }
  componentDidMount(){
  	console.log("child one");
  	return(<ChildTwo new={this.state.Name}/>)
  }
  
  render(){
    return(
      <div id="child1">
      	<h1>Child One</h1>
      	<p>{this.props.message}</p>
      	
      	<p>{this.state.Name}</p>
      	
      </div>

    )
  }
}
 