import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Dashboard from './Dashboard';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Header className="App-header">
              <Row type="flex" justify="space-between"> 
                <Col > 
                  <Link to="/">Contact Manager</Link> 
                </Col>
                <Col> 
                  <Link to="/login">Log In</Link> 
                </Col>
              </Row>
            </Header>
            <Content className="App"> 
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </Content>
          </Layout>
          </Router>
      </div>
    );
  }
}


export default App;
