import React from 'react';

export default class Pager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage : props.initialValue
        };
    }   
    increment(){
        this.setPageNumber(this.state.currentPage + 1);        
    }
    decrement(){
        this.setPageNumber(this.state.currentPage - 1); 
    }
    onChange(e){
        this.setPageNumber(e.target.value);       
    }
    setPageNumber(n){
        this.setState({currentPage: parseInt(n)});
        if(this.props.onPageChanged)
            this.props.onPageChanged(n);
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
    initialValue:React.PropTypes.number,
    onPageChanged: React.PropTypes.func
};

Pager.defaultProps = {
    initialValue:0
};

