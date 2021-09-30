//MODULES
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'react-use-auth';

//STYLES
import './authButtonAtom.css';

/**
 * @function AuthButtonAtom
 * @typeComponent Atom
 */
function AuthButtonAtom() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <Fragment>
      Welcome!{' '}
      <button
        // onClick={() => {
        //   auth.signOut(() => history.push('/'));
        // }}
      >
        Sign out
      </button>
    </Fragment>
  ) : (
    <p>You are not logged in.</p>
  );
}
export default AuthButtonAtom;
