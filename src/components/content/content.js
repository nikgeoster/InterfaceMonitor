//import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
//import {API_SERVER,API_PMT_INT_APP_ST,API_ST_Y} from '../const';
import Application from '../application/application';
import actApps from '../../JsonData/actApps';


class Content extends Component {
  constructor (props) {
    super(props);
    let newDate = new Date();
    newDate.setDate(newDate.getDate() - 1);
    this.state = {
      date: newDate,
      actApps:actApps,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    //this.renderActApps();
  }

  // renderActApps() {
  //   const URL = API_SERVER+API_PMT_INT_APP_ST+API_ST_Y;   
  //   axios.get(URL)
  //     .then(res => {
  //       const actApps = res.data;
  //       this.setState({ actApps:actApps });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  handleChange(value) {
    this.setState({date: value});
  }
  
  onFormSubmit(e) {
    e.preventDefault();
  }
 
  render() {   
    return (
      <div id="body">
        <div className='dateDisplay'>        
          <DatePicker  onChange={(event) => this.handleChange(event)} name='startDate'
            selected={this.state.date}  className='dateDisplay'  dateFormat='MM/dd/yyyy' 
            style={{ border:'none',borderBottom :'none' }}/>       
        </div>
        <div id='container'>           
            <Application key={this.state.date} actApps={this.state.actApps} currentDate={this.state.date}/>    
        </div>  
      </div>
    );    
  }
}

export default Content;