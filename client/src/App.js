import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Test from './components/Test/Test';
import Admin from './components/Admin/Admin';



const Blog = () => <h2>Blog</h2>;
const Contact = () => <h2>Contact</h2>;



const fakeAuth = {

  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    console.log("set auuth to false")
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      )}  />

  )


class Login extends Component {

  state = {
    redirectToReferrer: false
  }

  login = () => {
      fakeAuth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: false
        }))
      })
  }

  logout = () => {
    fakeAuth.signout(() => {
        console.log("signout");
    })
  }


  render () {

    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
          <Redirect to='/' />
        )
    }


    return (
        <div>
            <h2>Login</h2>
            <AuthButton login={this.login} logout={this.logout} />
        </div>
      )
  }
}



const AuthButton = (props) => (
  fakeAuth.isAuthenticated ?
                            <div>
                                <p>welcome</p>
                                <button onClick={props.logout}>Signout</button>
                            </div>

                          : <div>
                              <p>Please Login</p>
                              <button onClick={props.login}>Login</button>
                            </div>


  )

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
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/admin" component={Admin}/>
        </Layout>

      </div>
    );
  }
}

export default App;
