import React from 'react';
import ReactDOM from 'react-dom';
import ChildOne from './child_one.js';
import ChildTwo from './child_two.js';
import '../Css/parent_style.css';

class Parent extends React.Component{
	componentDidMount(){
  	console.log("parent")
  }
  render(){
    return(
      <div id="parent">
        <h1>Parent</h1>
        <ChildOne message={this.props.message}/>
        <ChildTwo message={this.props.message}/>
      </div>
    )
  };
}
window.onload = ()=>{
  ReactDOM.render(<Parent message="hello world!"/>,document.getElementById('app'));
};
