import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aux from './hoc/auxiliary';


const Landing = () => <h2>Landing</h2>;
const Blog = () => <h2>Blog</h2>;
const Contact = () => <h2>Contact</h2>;
const About = () => <h2>About</h2>;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div>
            <Router>
              <Aux>
                <Route exact path="/" component={Landing}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/about" component={About}/>
              </Aux>
            </Router>
          </div>
      </div>
    );
  }
}

export default App;
