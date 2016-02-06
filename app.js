import React from 'react';
import reactDOM from 'react-dom';
import Pager from './ui/pager.js';


//rendrning app
reactDOM.render(
  <Pager current={21} min={1} max={40}></Pager>,
  document.getElementById('app')
);
