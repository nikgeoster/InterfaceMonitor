//import axios from 'axios';
import React, { Component } from 'react';
//import {API_SERVER,API_PMT_INT_DAT_ID_DT,API_INT_ID} from '../const';
import Result from '../card/result';
import card from '../../JsonData/card';

class Card extends Component {
    constructor (props) {
        super(props);
        this.state = {
            appData:card.filter(cd=>cd.Interface_Id===this.props.id),
            date:this.props.date
        };
        this.formatDate(this.state.date);
        //this.renderAppData();
    }

    formatDate(date) {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return [year, month, day].join('-');
    }

    // renderAppData() {
    //     const URL = API_SERVER+API_PMT_INT_DAT_ID_DT+this.formatDate(this.state.date)+API_INT_ID+this.props.id;   
    //     axios.get(URL)
    //     .then(res => {
    //         const appData = res.data;
    //         this.setState({ appData:appData }); 
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // }
  
    render() {   
        return (
            <div className="cardDetails">        
                <div className="result">           
                    <Result key={this.props.id} appData={this.state.appData} interfaceId={this.props.id} selectedDate={this.props.date} />    
                </div>  
            </div>
        );    
    }
}

export default Card;