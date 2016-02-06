import React from 'react';

class Pager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage : props.initialValue
        };
    }
    componentDidMount(){
        console.log('Pager:componentDidMount');
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
        n = parseInt(n);
        this.setState({currentPage: n});
        if(this.props.onPageChanged)
            this.props.onPageChanged(n);
    }
    render(){
         console.log('Pager: render...');
        return (
            <span>
                <button onClick={this.decrement.bind(this)}>Decrement</button>            
                <input type="text" value={this.state.currentPage} onChange={this.onChange.bind(this)} />
                <button onClick={this.increment.bind(this)}>Increment</button>
            </span>
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

export default Pager;

