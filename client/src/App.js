import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Layout from './components/Layout';


const Landing = () => <h2>Landing</h2>;
const Blog = () => <h2>Blog</h2>;
const Contact = () => <h2>Contact</h2>;
const About = () => <h2>About</h2>;


class App extends Component {


  render() {
    return (
      <div className="App">
        <Layout>
            <Route exact path="/" component={Landing}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
        </Layout>

      </div>
    );
  }
}

export default App;
