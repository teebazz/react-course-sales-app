import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales'

class App extends Component {
  clickMain = (id)=>{
    console.log(id);   
    this.setState({courses : this.state.courses.map(course =>{
      if(course.id === id){
        course.active = !course.active;
      }
      return course;
    })}); 
  } 
  state = {
    courses : [
      {
        id : 1,
        name : 'Ios Dev Course',
        price : 199,
        active : false,
      },
      {
        id : 2,
        name : 'Complete pentesting course',
        price :  299,
        active : false,
      },
      {
        id : 3,
        name : 'Complete Front End',
        price : 399,
        active : false,

      },
      {
        id : 4,
        name : 'Bug bounty and testing',
        price : 700,
        active : false

      }
    ]
  }
  render() {
    var courses    = this.state.courses;   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to course sales page
          </p>        
        </header>
        <CourseSales items={courses} clickMain={this.clickMain}/>
      </div>
    );
  }
}

export default App;
 