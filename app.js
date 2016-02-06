import React from 'react';
import reactDOM from 'react-dom';
import Pager from './ui/pager.js';


//rendrning app
reactDOM.render(
  <Pager initialValue={9}></Pager>,
  document.getElementById('app')
);
