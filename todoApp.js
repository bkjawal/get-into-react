import React from  'react';
import reactDOM from 'react-dom';
import ToDoApp from './ui/todos';
import ToDoModel from './m/toDoModel';

let toDoModel = new ToDoModel();

window.ABC = toDoModel;


reactDOM.render(
    <ToDoApp model={toDoModel}></ToDoApp> ,
     document.getElementById('app')
);