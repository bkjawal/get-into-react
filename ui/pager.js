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
     
    setPageNumber(n){
        //validation
        n = parseInt(n);
        if(n < this.props.min || n > this.props.max)
            return;
            
        this.setState({currentPage: n});
        if(this.props.onPageChanged)
            this.props.onPageChanged(n);
    } 
       
    render(){
         console.log('Pager: render...');
        return (
            <div>
                <button onClick={e =>this.setPageNumber(this.props.min)}>First</button>
                <button onClick={e => this.setPageNumber(this.state.currentPage - 1)}>Decrement</button>            
                <input type="text" onChange={e => this.setPageNumber(e.target.value)}  value={this.state.currentPage}  />
                <button onClick={e => this.setPageNumber(this.state.currentPage + 1)}>Increment</button>
                <button onClick={e =>this.setPageNumber(this.props.max)}>Last</button>
            </div>
            );
    }
}

Pager.propTypes = {
    initialValue:React.PropTypes.number,
    min:React.PropTypes.number,
    max:React.PropTypes.number,
    onPageChanged: React.PropTypes.func
};

Pager.defaultProps = {
    initialValue:0,
    min:0,
    max:1000
};

export default Pager;

