import React from 'react';
import reactDOM from 'react-dom';
import Pager from './ui/pager.js';
import MyTable from './ui/table.js'


let pagerObj = {min:1,max:25,current:10};

let products = [
    {id:1, name:'pen',price:10},
    {id:2, name:'pen1',price:15}
];

window.pros = products; 


//rendrning app
reactDOM.render(
  <div>
    <Pager {...pagerObj}></Pager>
    <MyTable products={products}></MyTable>
  </div>,
  document.getElementById('app')
);
