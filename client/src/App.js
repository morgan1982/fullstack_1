import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Test from './components/Test/Test';


// const Landing = () => <h2 className="home">Landing</h2>;
const Blog = () => <h2>Blog</h2>;
const Contact = () => <h2>Contact</h2>;


class App extends Component {

  state = {
    posts: [
      {title: 'encapsulator'},
      {title: 'redux'},
      {title: 'node'},
      {title: 'the new dawn'}

      ]
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Layout>
            <Route exact path="/" render={() => <Home posts={posts}/>}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/test" component={Test}/>
        </Layout>

      </div>
    );
  }
}

export default App;
