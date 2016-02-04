import React from 'react';
import reactDOM from 'react-dom';


//let Welcome = ()=> <div>Welcome to react world  with es6 arrow function:-)</div>;

class Counter extends React.Component{
   constructor(){
       super();
   }
   render(){
       return (<div>Counter's value  {this.props.initialValue}</div>);
   }
}


reactDOM.render(
  <Counter initialValue="10"></Counter>,
  document.getElementById('app')
);
