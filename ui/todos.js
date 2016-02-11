import React from 'react';
import classnames from 'classnames';

export default class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentFilter:'ALL'         
        }
        this.model = this.props.model;
        console.log('In constructor... ');      
    }
    componentWillMount(){
        this.unsubscribe = this.model.subscribe(()=> this.forceUpdate());
    }
    componentWillUnmount(){
        this.unsubscribe(); 
    }
    onApplyFilter(f){
        this.setState({currentFilter:f});
    }
    hadnleRemoveCompleted(){
        this.model.destroyCompleted();
    }
    render(){
        return (
            <div>
            <ToDoForm onNewToDo={title => this.model.addTodo(title)} ></ToDoForm>
            <ToDoList  filter={this.state.currentFilter} model={this.model}></ToDoList>
            <ToDoFooter onApplyFilter={(f)=>this.onApplyFilter(f)} onRemoveCompleted={()=>this.hadnleRemoveCompleted()}></ToDoFooter>
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
            <div className="header">
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
    applyFilter()
    {
        switch(this.props.filter){
            case 'ACTIVE':
                return this.props.model.getActive();
           case 'COMPLETED':
                return this.props.model.getCompleted();
           default:
                return this.props.model.getAll();
        }
    }
   
    render(){
        let todos = [];
        let m =  this.props.model;
        this.applyFilter().forEach(function(todo){
            todos.push(
            <li key={todo.id}>
                <ToDoItem todo={todo} 
                    onDelete={m.destroy.bind(m)}
                    onToggle={(id) => this.handleToggle(id)}
                  />               
            </li>);
        }.bind(this));
        return(
            <div className="detail">                
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
        let cls = classnames({completedTask:this.props.todo.isCompleted});
        return(
            <div>
                <input onChange={(e)=>this.handleChange(e)} type='checkbox' checked={this.props.todo.isCompleted} />
                <label type='label' className={cls} >{this.props.todo.title}</label>
                <button onClick={()=> this.handleClose()}>X</button> 
            </div>
        );
    }
}

class ToDoFooter extends React.Component{
    constructor(){
        super();
    }
    applyFilter(f){
        this.props.onApplyFilter(f);
    }
    onRemoveCompleted(){
        this.props.onRemoveCompleted();
    }
    render(){
        return(
            <div className="footer">
                <ul>
                    <li><button onClick={()=> this.applyFilter('ALL')}>All</button></li>
                    <li><button onClick={()=> this.applyFilter('ACTIVE')}>Active</button></li>
                    <li><button onClick={()=> this.applyFilter('COMPLETED')}>Commpleted</button></li>
                    <li><button onClick={()=> this.onRemoveCompleted()} className="clearCompleted">Remove Completed</button></li>
                </ul>
            </div>
        );
    } 
}

