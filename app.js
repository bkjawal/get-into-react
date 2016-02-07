import React from 'react';
import reactDOM from 'react-dom';
import Pager from './ui/pager.js';


let pagerObj = {min:1,max:25,current:10};

//rendrning app
reactDOM.render(
  <Pager {...pagerObj}></Pager>,
  document.getElementById('app')
);
