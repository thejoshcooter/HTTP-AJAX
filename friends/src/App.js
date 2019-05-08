import React from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import Form from './components/Form'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  };

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => this.setState({ friends: res.data }) )
    .catch(err => console.log(err));
  };
  
  render() {
    console.log(this.state.friends);
    return (
      <div>
      <FriendsList friends={this.state.friends} />
      <Form />
      </div>
    );
  };
};

export default App;
