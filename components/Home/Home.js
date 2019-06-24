import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import MainPage from '../MainPage/MainPage';

// Configure Firebase.
var config = {
  apiKey: "AIzaSyB9blWl65AEgWXTQoIAqIVabDyuObcXF2Q",
  authDomain: "unipolitics-8787d.firebaseapp.com",
  databaseURL: "https://unipolitics-8787d.firebaseio.com",
  projectId: "unipolitics-8787d",
  storageBucket: "unipolitics-8787d.appspot.com",
  messagingSenderId: "375050650768"
};
firebase.initializeApp(config);

class Home extends React.Component {
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <MainPage logOutHandler={() => firebase.auth().signOut()}/>
    );
  }
}

export default Home;