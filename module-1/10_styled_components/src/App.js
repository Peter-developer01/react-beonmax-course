import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ButtonGroup>
            <Button variant="outline-info" onClick={() => alert('Primary clicked!')}>Primary</Button>
            <Button variant="outline-danger" onClick={() => alert('Danger clicked!')}>Be careful</Button>
            <Button variant="outline-success" onClick={() => alert('Success clicked!')}>Success</Button>
            <Button variant="outline-warning" onClick={() => alert('Warning clicked!')}>Warning!</Button>
          </ButtonGroup>
        </header>
      </div>
    );
  }
}

export default App;
