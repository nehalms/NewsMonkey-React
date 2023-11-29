import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


//class based component
export default class App extends Component {

  pageSize = 6;
  // apiKey = 'd607c8ed77c1486aa0aa5fb9d60e27d0'
  apiKey = process.env.REACT_APP_NEWS_API

  constructor() {
    super();
    this.state = {
      country : 'in',
      progress: 0,
    }
  }

  setC = (data)=> {
    this.setState({
      country: data
    })
  }

  setProgres = (val)=> {
    this.setState({
      progress: val
    })
    
  }

  render() {

    return (
      <div>
        <Router>
          <Navbar set={this.setC}/>
          <LoadingBar
              color='#f11946'
              height={3}
              progress={this.state.progress}
          />
          
          <Routes>
            <Route exact path="/" element={<News progress={this.setProgres} api={this.apiKey} key="Home" pageSize={this.pageSize} country="in" category="general" />} />

            <Route exact path="/in" element={<News progress={this.setProgres} api={this.apiKey} key="in" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/us" element={<News progress={this.setProgres} api={this.apiKey} key="us" pageSize={this.pageSize} country="us" category="general" />} />

            <Route exact path="/business" element={<News progress={this.setProgres} api={this.apiKey} key="business" pageSize={this.pageSize} country={this.state.country} category="business" />} /> 
            <Route exact path="/entertainment" element={<News progress={this.setProgres} api={this.apiKey} key="entertainment" pageSize={this.pageSize} country={this.state.country} category="entertainment" />} /> 
            <Route exact path="/general" element={<News progress={this.setProgres} api={this.apiKey} key="general" pageSize={this.pageSize} country={this.state.country} category="general" />} /> 
            <Route exact path="/health" element={<News progress={this.setProgres} api={this.apiKey} key="health" pageSize={this.pageSize} country={this.state.country} category="health" />} /> 
            <Route exact path="/science" element={<News progress={this.setProgres} api={this.apiKey} key="science" pageSize={this.pageSize} country={this.state.country} category="science" />} /> 
            <Route exact path="/sports" element={<News progress={this.setProgres} api={this.apiKey} key="sports" pageSize={this.pageSize} country={this.state.country} category="sports" />} /> 
            <Route exact path="/technology" element={<News progress={this.setProgres} api={this.apiKey} key="technology" pageSize={this.pageSize} country={this.state.country} category="technology" />} /> 
          </Routes>
        </Router>
      </div>
    )
  }
}



