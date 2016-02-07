import React from 'react';

let Pager =  PagerUI => class Pager extends React.Component{
    constructor(props){
        super(props);
        let n = this.props.current;
        n = (this.props.min <= n && n <= this.props.max)?n:this.props.min;
        this.state = {
            currentPage : n            
        }; 
        
        this.setPageNumber = this.setPageNumber.bind(this);
               
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
           <PagerUI {...this.props} {...this.state} setPageNumber={this.setPageNumber}></PagerUI> 
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

let  PagerUI = (props) => 
   <div>  
                <button onClick={e => props.setPageNumber(props.min)}>First</button>
                <button onClick={e => props.setPageNumber(props.currentPage - 1)}>Down</button>            
                <input type="text" onChange={e => props.setPageNumber(e.target.value)} value={props.currentPage}  />
                <button onClick={e => props.setPageNumber(props.currentPage + 1)}>Up</button>
                <button onClick={e =>props.setPageNumber(props.max)}>Last</button>
   </div>
   
let PagerExtender = Pager(PagerUI);

export default PagerExtender;

