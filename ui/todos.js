import React from 'react';

export default class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentFilter:'ALL'         
        }
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

class ToDoForm extends React.Component{
    constructor(props){
        super(props);        
    }
    handleSubmit(){
        let title = this.refs.title.value;
        if(title){
            this.props.onNewToDo(title);
            this.refs.title.value = '';            
        }        
    }
    handleKeyDown(e){
        if(e.keyCode === 13)
            this.handleSubmit();
            
    }
    render(){
        return (
            <div>
                <input  onKeyDown={(e) => this.handleKeyDown(e)} ref="title" type='text' placeholder='what you want to do?'/>
                <button onClick={() => this.handleSubmit()}>Go</button>
            </div>
        ); 
    }
}

class ToDoList extends React.Component{ 
    constructor(props){
        super(props);
    }
    
    handleToggle(id){
         this.props.model.toggle(id);
    }
   
    render(){
        let todos = [];
        let m =  this.props.model;
        m.getAll().forEach(function(todo){
            todos.push(
            <li key={todo.id}>
                <ToDoItem todo={todo} 
                    onDelete={m.destroy.bind(m)}
                    onToggle={(id) => this.handleToggle(id)}
                  />               
            </li>);
        }.bind(this));
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
    handleClose(){
        this.props.onDelete(this.props.todo.id);
    }
    handleChange(e){
        if(e.target.value)
            this.props.onToggle(this.props.todo.id);
    }
    render(){
        return(
            <div>
                <input onChange={(e)=>this.handleChange(e)} type='checkbox' />
                <input type='label' value={this.props.todo.title}/>
                <button onClick={()=> this.handleClose()}>X</button> 
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

