import React from 'react';
import Pager from './pager'

let PagerExtender = (Pager)=> class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cPage: props.initialValue
        }
    }
    componentDidMount(){
        console.log('PagerExtender:componentDidMount');
    }
    onClickFirst(){
       //this.refs.pager.initialValue = this.props.min; 
       this.setState({
           cPage:this.props.min
       });
    }
    onClickLast(){
      // this.refs.pager.initialValue = this.props.max; 
       this.setState({
           cPage:this.props.max
       });
    }        
    render(){
        console.log('PagerExtender: render...');
        return (
            <div>
                <button onClick={this.onClickFirst.bind(this)}>First</button>
                <Pager ref="pager" initialValue={this.state.cPage} ></Pager>
                <button>Last</button>
            </div>                
            );
    }
};

PagerExtender.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    initialValue: React.PropTypes.number    
};

PagerExtender.defultProps={
    min: 0,
    max: 100,
    initialValue:0
};


export default PagerExtender(Pager);