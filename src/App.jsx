//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './core/components/layout/Header';
import Footer from './core/components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './core/routes/MainRoutes';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';

import './conf/translation';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {this.props.layout == "header" &&
            <Header></Header>
          }
          <Container>
            <MainRoutes />
          </Container>
          <Footer></Footer>
        </BrowserRouter>
      </Provider>
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
