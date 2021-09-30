//MODULES
import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

//COMPOSANTS
import H1Atom from '../../atoms/titles/h1/H1Atom';
import TitlesAndParagraphsMolecule from '../../molecules/titlesAndParagraphs/TitlesAndParagraphsMolecule';
import InputsAndLabelsMolecule from '../../molecules/inputsAndLabels/InputsAndLabelsMolecule';

//STYLES
import './signInOrganism.css';

interface SignInOrganismProps {
  propsAuthentication: any;
}
interface SignInOrganismStates {
  email: string;
  password: string;
  confirmPassword: string;
  auth: any;
}

class SignInOrganism extends Component<
  SignInOrganismProps,
  SignInOrganismStates
> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      auth: getAuth(),
    };
    console.log('props :', props);
  }

  handleSubmit = (event: any) => {
    alert(console.log('handleSubmit :', event));
    createUserWithEmailAndPassword(
      this.state.auth,
      this.state.email,
      this.state.password
    )
      .then((userCredential) => {
        // const user = userCredential.user;
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };

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
    const email = this.state.email;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;

    return (
      <form className="signInForm" method="post" onSubmit={this.handleSubmit}>
        <H1Atom value="YuGiOh!ndustrie" />
        <div className="signInContent">
          <div className="signInSide">
            <TitlesAndParagraphsMolecule
              h2="S'inscrire"
              p="Complétez les champs afin de vous inscrire."
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
              valueLabel="Mot de passe"
              id="password"
              type="password"
              name="password"
              valueInput={password}
              onChange={this.handleChange}
            />
            <InputsAndLabelsMolecule
              htmlFor="confirmPassword"
              valueLabel="Confirmation du mot de passe"
              id="confirmPassword"
              type="password"
              name="password"
              valueInput={confirmPassword}
              onChange={this.handleChange}
            />
            <input type="submit" value="S'inscrire" />
          </div>

          <span className="choiceWork">OU</span>

          <div className="logInSide">
            <TitlesAndParagraphsMolecule
              h2="Connexion"
              p="Êtes-vous déjà inscris ? Alors connectez-vous !"
            />
            <button id="logIn" onClick={this.props.propsAuthentication.onClick}>
              Se connecter
            </button>
          </div>
        </div>
        <div className="backgroundModal"></div>
      </form>
    );
  }
}
export default SignInOrganism;
