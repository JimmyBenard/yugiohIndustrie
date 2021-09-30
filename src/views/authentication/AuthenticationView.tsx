//MODULES
import React, { Fragment, Component } from 'react';
//ATOMICS COMPONENTS
import LogInOrganism from '../../organisms/logIn/LogInOrganism';
import SignInOrganism from '../../organisms/signIn/SignInOrganism';
// import ForgotPassword from './organisms/forgotPassword/ForgotPasswordOrganism';
// import PrivacyPolicy from './views/privacyPolicy/PrivacyPolicyView';
// import TermsAndConditions from 'views/termsAndCondition/TermsAndConditionView';

//STYLES
import './authenticationView.css';

interface AuthenticationViewProps {}
interface AuthenticationViewStates {
  players: object;
  invertLogInAndSignIn: boolean;
}

/**
 * @classComponent AuthentificationView
 * @returns LogInOrganism, SignInOrganism, ForgotPassword
 * @description Possibilité de consulter les pages Privacy Policy et Terms & conditions.
 */
class AuthenticationView extends Component<
  AuthenticationViewProps,
  AuthenticationViewStates
> {
  constructor(props: AuthenticationViewProps) {
    super(props);
    this.state = {
      //States DB
      players: [],

      //States local
      invertLogInAndSignIn: true,
    };
  }
  handleClick = (event: any) => {
    event.preventDefault();
    switch (event.target.id) {
      case 'logIn':
        this.setState({ invertLogInAndSignIn: true });
        break;
      case 'signIn':
        this.setState({ invertLogInAndSignIn: false });
        break;
    }
    console.log('eventClick :', event.target);
    console.log('currentShowLogin', this.state.invertLogInAndSignIn);
  };

  render() {
    return (
      <Fragment>
        <InvertLogInAndSignIn
          invertLogInAndSignIn={this.state.invertLogInAndSignIn}
          onClick={this.handleClick}
        />
      </Fragment>
    );
  }
}

interface InvertLogInAndSignInProps {
  invertLogInAndSignIn: boolean;
  onClick: any;
}
/**
 * @functionComponent InvertLogInAndSignIn
 * @param props boolean
 * @description Permet d'interchanger les modales de connexion et d'inscription selon le bouton cliqué.
 */
function InvertLogInAndSignIn(props: InvertLogInAndSignInProps) {
  if (props.invertLogInAndSignIn === true) {
    return (
      <LogInOrganism propsAuthentication={props} />
    );
  } else {
    return (
      <SignInOrganism propsAuthentication={props} />
    );
  }
}

export default AuthenticationView;
