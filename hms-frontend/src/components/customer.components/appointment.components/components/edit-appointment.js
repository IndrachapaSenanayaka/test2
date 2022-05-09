import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./itemStyles.css";
import "./cardStyles.css";
import "./staffStyles.css";
import "./appointmentindex.css";

export default class EditAppointment extends Component {
  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeDoctorname = this.onChangeDoctorname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        date: new Date(),
        time:'',
        firstname: '',
       lastname:'',
        email: '',
        phone:'',
        doctorname:'',
        users: []
      }
    }

  componentDidMount() {
    axios.get('http://localhost:8070/appointments/'+this.props.match.params.id)
      .then(response => {
        this.setState({
         date: new Date(response.data.date),
         time: response.data.time,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
           email: response.data.email,
          phone: response.data.phone,
         doctorname: response.data.doctorname,
         
         
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
  onChangeTime(e) {
    this.setState({
   time: e.target.value
    })
  }

  onChangeFirstname(e) {
    this.setState({
     firstname: e.target.value
    })
  }
  onChangeLastname(e) {
    this.setState({
     lastname: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
     email: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
     phone: e.target.value
    })
  } onChangeDoctorname(e) {
    this.setState({
     doctorname: e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault();

    const appointment = {
        date: this.state.date,
        time: this.state.time,
         firstname: this.state.firstname,
     lastname: this.state.lastname,
         email: this.state.email,
         phone: this.state.phone,
         doctorname: this.state.doctorname
    }

    console.log(appointment);

    axios.post('http://localhost:8070/appointments/update/' + this.props.match.params.id, appointment)
    .then(() => {
      alert("Appointment Edited")
    }).catch((err)=>{
      alert("Failed to edit apointment")
    })
  window.location = '/appointment';
  }

  
  render() {
    return (
<div> 
  <link rel="stylesheet" href="staffStyles.css"></link>
  <link rel="stylesheet" href="cardStyles.css"></link>
  <link rel="stylesheet" href="itemStyles.css"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <body>
  <div class="main-container">
  <div class="flex-box-container">
    <div class="flex-box sidebar-container">
    <div class="sidebar-item logo">
    <img class="logo" src="/logo.png"/>
      </div>
      <div class="sidebar-item profile">
          {/* <img class="profileImg" src="profile.png"/> */}
          <h4>E - Channelling</h4>
          
      </div>
      <div class="sidebar-item sidebar-menu">
           
      <ul>
              <li className="item">
                            <Link to={"/appointment/create"}><i class="fa fa-plus-square" aria-hidden="true"></i><span>Add</span></Link>
              </li>

              <li className="item">
                            <Link to={"/appointment"}><i class="fas fa-list-ul"></i><span>View</span></Link>
              </li>

            </ul>
          
      </div>
      <div class="sidebar-item logout">
        <ul>
            <li><a class="logout-btn"><i class="fa fa-sign-out" aria-hidden="true"></i><span>Log Out</span></a></li>
        </ul>  
      </div>
    </div>
    <div class ="flex-box content-container">
          <div class ="grid-container">
            <div class ="grid-item item-1">
              <div class="scroll-item scroll-item-1">
            <h2 style={{color:"#084587"}}>Edit Appointments</h2>
      <div className ="container">
       
      < div>
      <center>
      <form className="form2" onSubmit={this.onSubmit}>
        
      <div className="form-group" style={{float:"left"}}>
          <label>Date: </label>
            <DatePicker
            style={{float:"left"}}
            className="form-control"
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>

          <div className="form-group" style={{float:"right"}}>
             <label>Time:</label>
              <input type="time"
              className="form-control"
              style={{float:"right"}}
              required
             value={this.state.time}
             onChange={this.onChangeTime}
            />
        </div>
        <div className="form-group" style={{float:"left"}}> 
          <label>Firstname: </label>
          <input  type="text"
              required
              className="form-control"
              style={{float:"left"}}
              value={this.state.firstname}
              onChange={this.onChangeFirstname}
              />
        </div>
        <div className="form-group" style={{float:"right"}}> 
          <label>Lastname: </label>
          <input  type="text"
          style={{float:"right"}}
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastname}
              />
        </div>
        <div className="form-group" style={{float:"left"}}> 
          <label>Email: </label>
          <input  type="text"
          style={{float:"left"}}
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              pattern = "[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}"
              />
        </div>
        <div className="form-group" style={{float:"right"}}> 
          <label>Phone: </label>
          <input  type="text"
          style={{float:"right"}}
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              />
        </div>

        <div className="form-group" style={{float:"left"}}> 
          <label>Doctor name: </label>
          <input  type="text"
          style={{float:"left"}}
              required
              className="form-control"
              value={this.state.doctorname}
              onChange={this.onChangeDoctorname}
              />
        </div>
        <div className="form-group">
        <input type ='submit' value='Edit Appointment'  name='Edit Appointment' className="form-control btn btn-primary"  style = {{marginTop:"30px"}}/>
        </div>
      </form>
      </center>
      </div>              
        </div>
    </div> 
    </div> 
  </div>  
  </div>     
</div>
</div>
</body>
</div> 
    );
  }
}








