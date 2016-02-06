import React from 'react';

class Pager extends React.Component{
    constructor(props){
        super(props);
        let n = this.props.current;
        n = (this.props.min <= n && n <= this.props.max)?n:this.props.min;
        this.state = {
            currentPage : n            
        };        
    }
    
    componentDidMount(){
        console.log('Pager:componentDidMount');
    }   
     
    setPageNumber(n){
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
                <button onClick={e => this.setPageNumber(this.state.currentPage - 1)}>Down</button>            
                <input type="text" onChange={e => this.setPageNumber(e.target.value)}  value={this.state.currentPage}  />
                <button onClick={e => this.setPageNumber(this.state.currentPage + 1)}>Up</button>
                <button onClick={e =>this.setPageNumber(this.props.max)}>Last</button>
            </div>
            );
    }
}

Pager.propTypes = {
    current:React.PropTypes.number,
    min:React.PropTypes.number,
    max:React.PropTypes.number,
    onPageChanged: React.PropTypes.func
};

Pager.defaultProps = {
    current:0,
    min:0,
    max:1000
};

export default Pager;

