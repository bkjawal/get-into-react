import React from 'react';
import reactDOM from 'react-dom';


//let Welcome = ()=> <div>Welcome to react world  with es6 arrow function:-)</div>;

class Welcome extends React.Component{
   constructor(){
       super();
   }
   render(){
       return (<div>First static component</div>);
   }
}


reactDOM.render(
  <Welcome></Welcome>,
  document.getElementById('app')
);
