import React from 'react';
import reactDOM from 'react-dom';
import PagerExtender from './ui/pagerExtender.js';


//rendrning app
reactDOM.render(
  <PagerExtender initialValue={9}></PagerExtender>,
  document.getElementById('app')
);
