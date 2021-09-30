//MODULES
import React, { Component } from 'react';
// import { useHistory, Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

//ATOMICS COMPONENTS
import H1Atom from '../../atoms/titles/h1/H1Atom';
import AAtom from '../../atoms/links/AAtom';
import TitlesAndParagraphsMolecule from '../../molecules/titlesAndParagraphs/TitlesAndParagraphsMolecule';
import InputsAndLabelsMolecule from '../../molecules/inputsAndLabels/InputsAndLabelsMolecule';

//STYLES
import './logInOrganism.css';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKGD5J-e95b1sT-FyZcrTkTtdCASKyKSk',
  authDomain: 'yugiohindustrie.firebaseapp.com',
  projectId: 'yugiohindustrie',
  storageBucket: 'yugiohindustrie.appspot.com',
  messagingSenderId: '646485703745',
  appId: '1:646485703745:web:4500e2085ed21e6dec5ac0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

//Authentification state
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});

interface LogInOrganismProps {
  propsAuthentication: any;
}
interface LogInOrganismStates {
  firebaseConfig: object;
  email: string;
  password: string;
}

/**
 * @classComponent LogInOrganism
 * @description Affiche un template de modale de connexion avec le module d'authentification.
 */
class LogInOrganism extends Component<LogInOrganismProps, LogInOrganismStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      //DB
      firebaseConfig: firebaseConfig,

      //Local
      email: '',
      password: '',
    };
    console.log('props :', props);
  }

  handleChange = (event: any): any => {
    switch (event.target.id) {
      case 'email':
        this.setState({ email: event.target.value });
        break;
      case 'password':
        this.setState({ password: event.target.value });
        break;
    }
    console.log('eventChange :', event.target);
  };

  render() {
    console.log('email :', this.state.email);
    console.log('password :', this.state.password);
    console.log('propsInput :', InputEvent);
    const email = this.state.email;
    const password = this.state.password;
    return (
      <form className="logInForm">
        <H1Atom value="YuGiOh!ndustrie" />
        <div className="logInContent">
          <div className="logInSide">
            <TitlesAndParagraphsMolecule
              h2="Connexion"
              p="Vous avez déjà un compte ? Alors connectez-vous !"
            />
            <InputsAndLabelsMolecule
              htmlFor="email"
              valueLabel="Email"
              id="email"
              type="text"
              name="email"
              valueInput={email}
              onChange={this.handleChange}
            />
            <InputsAndLabelsMolecule
              htmlFor="password"
              valueLabel="password"
              id="password"
              type="password"
              name="password"
              valueInput={password}
              onChange={this.handleChange}
            />

            <button id="logIn" type="submit">
              Se connecter
            </button>
            <AAtom value="Mot de passe oublié ?" path="./" />
          </div>

          <div className="choiceWork">OU</div>

          <div className="signInSide">
            <TitlesAndParagraphsMolecule
              h2="Inscription"
              p="Vous n'avez pas de compte ? Alors inscrivez-vous !"
            />
            <button
              id="signIn"
              onClick={this.props.propsAuthentication.onClick}
            >
              S'inscrire
            </button>
          </div>
        </div>
        <div className="backgroundModal"></div>
      </form>
    );
  }
}
export default LogInOrganism;
