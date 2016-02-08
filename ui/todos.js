import React from 'react';

class ToDoForm extends React.Component{
    constructor(props){
        super(props);
    }
     
    render(){
        return (
            <div>
                <input ref="title" type='text'/>
                <button onClick={() => this.props.onNewToDo(this.refs.title.value)}>Go</button>
            </div>
        ); 
    }
}

class ToDoList extends React.Component{ 
    constructor(props){
        super(props);
    }
   
    render(){
        let todos = [];
        this.props.model.getAll().forEach(function(todo){
            todos.push(<li><ToDoItem todo={todo}></ToDoItem></li>);
        });
        return(
            <div>
                <span>{todos.length}</span>
                <ul>
                    {todos }
                </ul>
            </div>
        );
    }
}

class ToDoItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <input type='checkbox' />
                <input type='label' value={this.props.todo.title}/>
                <button>X</button> 
            </div>
        );
    }
}

class ToDoFooter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ul>
                    <li><button>All</button></li>
                    <li><button>Active</button></li>
                    <li><button>Commpleted</button></li>
                </ul>
            </div>
        );
    } 
}

export default class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.model = this.props.model; 
        this.model.subscribe(()=> this.forceUpdate());      
    }
    render(){
        return (
            <div>
            <ToDoForm onNewToDo={title => this.model.addTodo(title)} ></ToDoForm>
            <ToDoList model={this.model}></ToDoList>
            <ToDoFooter></ToDoFooter>
            </div>
        );
    }
} 