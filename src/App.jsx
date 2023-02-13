//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './core/components/layout/Header';
import Footer from './core/components/layout/Footer';

class App extends React.Component {

  render() {
    return (
      <>
        <Header></Header>
        <Container>

        </Container>
        <Footer></Footer>
      </>
    );
  }

}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
