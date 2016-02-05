import React from 'react';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage : props.initialValue
        };
    }   
    increment(){
        this.setState({currentPage:  this.state.currentPage + 1});
    }
    decrement(){
        this.setState({currentPage:this.state.currentPage-1});
    }
    render(){
        return (
            <div>
                <button onClick={this.decrement.bind(this)}>Decrement</button>            
                <input type="text" value={this.state.currentPage} />
                <button onClick={this.increment.bind(this)}>Increment</button>
            </div>
            );
    }
}
