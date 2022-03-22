import React,{Component} from 'react';
import Card from '../card/card';

class Details extends Component {
    
    constructor (props) {
        super(props);        
        this.state = {
            data:this.props.data,
            date:this.props.date
        };
    }

    render(){
        return (         
            <div className="details">                   
                <Card key={this.state.data.Interface_Id} id={this.state.data.Interface_Id} date={this.state.date}/>  
            </div>
        );  
    }
}

export default Details;