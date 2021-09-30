//----- MODULES
import React, { Fragment, Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';

//----- COMPOSANTS
import AuthenticationView from './views/authentication/AuthenticationView';

//----- STYLES
import './index.css';

// Configuration firebase WEB
const firebaseConfig = {
  apiKey: 'AIzaSyAKGD5J-e95b1sT-FyZcrTkTtdCASKyKSk',
  authDomain: 'yugiohindustrie.firebaseapp.com',
  projectId: 'yugiohindustrie',
  storageBucket: 'yugiohindustrie.appspot.com',
  messagingSenderId: '646485703745',
  appId: '1:646485703745:web:4500e2085ed21e6dec5ac0',
};
initializeApp(firebaseConfig);

// Initialize Firebase

interface AppProps {}
interface AppState {}

/**
 * @class App
 * Exécute l'application en chargeant la page d'Authentication.
 */
class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
          <AuthenticationView />
      </Fragment>
    );
  }
}
export default App;

ReactDOM.render((
  <Fragment>
    <App />
  </Fragment>
), document.getElementById('root'));
