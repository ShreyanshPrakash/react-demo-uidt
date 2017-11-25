import React from 'react';
import '../Css/child_two.css';

export default class ChildTwo extends React.Component{
	constructor(props){
  	super(props);
  }
	componentDidMount(){
  	console.log("child two")
  }
  render(){
    return(
      <div id="child2">
      	<h1>Child Two</h1>
      	<p>{this.props.message}</p>
      	<p>{this.props.new}</p>
      </div>

    )
  }
}
