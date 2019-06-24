import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import "./App.css";
import MainPage from './components/MainPage/MainPage';

// Configure Firebase.
var config = {}; //copy Firebase config from firebase.google.com
firebase.initializeApp(config);

class App extends React.Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
    hasUpdated: false
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
        (user) => {
          this.setState({isSignedIn: !!user, hasUpdated: true});
        }
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn && this.state.hasUpdated) {
      return (
        <div style={{textAlign: "center"}}>
          <link href="login.css" rel="stylesheet" />
          <img src="unipoliticslogonew.png" style={{width: "80%", maxWidth: "700px", height: "auto"}}/>
          <StyledFirebaseAuth style={{verticalAlign: "middle"}} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    } else if (this.state.hasUpdated && this.state.isSignedIn) {
      return (
        <MainPage logOutHandler={() => firebase.auth().signOut()} firebase={firebase}/>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default App;