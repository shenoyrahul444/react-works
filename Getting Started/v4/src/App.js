import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Test from './Test';
import Post from './components/Post';


// import from './components/ReduxDemo.js';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">

              <Navbar />
              <Switch>
                  <Route exact path ="/" component= { Home }  />
                  <Route path ='/about' component= { About }  /> 
                  <Route path ='/contact' component= { Contact }  />
                  <Route path ='/test/:test_id' component= { Test }  />
                  <Route path= "/:post_id" component = { Post } />
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
