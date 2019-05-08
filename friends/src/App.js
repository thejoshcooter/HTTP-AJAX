import React from 'react';
import './App.css';
import axios from 'axios';

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
      <div>hello from new app</div>
    );
  };
};

export default App;
