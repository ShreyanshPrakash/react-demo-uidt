import React from 'react';
import '../Css/child_style.css';

export default class ChildOne extends React.Component{
  componentDidMount(){
  	console.log("child one")
  }
  render(){
    return(
      <div id="child1">
      	<h1>Child One</h1>
      </div>

    )
  }
}
