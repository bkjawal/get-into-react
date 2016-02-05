import React from 'react';

export default class Pager extends React.Component{
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
    onChange(e){
        
        this.setState({currentPage: parseInt(e.target.value)});
    }
    render(){
        return (
            <div>
                <button onClick={this.decrement.bind(this)}>Decrement</button>            
                <input type="text" value={this.state.currentPage} onChange={this.onChange.bind(this)} />
                <button onClick={this.increment.bind(this)}>Increment</button>
            </div>
            );
    }
}

Pager.propTypes = {
    initialValue:React.PropTypes.number
};

Pager.defaultProps = {
    initialValue:0
};

