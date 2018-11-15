import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Test from './Test';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
               <Route exact path ="/" component= { Home }  />
              <Route path ='/about' component= { About }  /> 
              <Route path ='/contact' component= { Contact }  />
              <Route path ='/test' component= { Test }  />
              
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
