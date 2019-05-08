import React from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList'

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
      <FriendsList friends={this.state.friends} />
    );
  };
};

export default App;
