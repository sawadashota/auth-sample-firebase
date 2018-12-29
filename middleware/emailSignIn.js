import firebase from '../plugins/firebase';

export default async function ({store, redirect}) {
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      email = window.prompt('Please provide your email for confirmation');
    }

    try {
      await firebase.auth().signInWithEmailLink(email, window.location.href);
      window.localStorage.removeItem('emailForSignIn');
      redirect('/');
    } catch (e) {
      console.error(e);
    }
  }
}
