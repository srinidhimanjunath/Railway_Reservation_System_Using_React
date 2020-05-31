import React, { Component } from "react";
import "./component.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  continue = (e) => {
    this.props.nextStep();
  };
  login() {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const firebase = this.props.firebase;

    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);

    promise.then((user) => {
      this.continue();
    });

    promise.catch((e) => {
      const err = e.message;
      this.setState({ err: err });
    });
  }

  signup() {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const firebase = this.props.firebase;

    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise.then((user) => {
      firebase
        .database()
        .ref("users/" + uuidv4())
        .set({
          email: email,
          password: password,
        });
      console.log(user);
      this.continue();
    });
    promise.catch((err) => {
      err = err.message;
      console.log(err);
      this.setState({ err: err });
    });
  }
  signupgoogle() {
    const firebase = this.props.firebase;
    var provider = new firebase.auth.GoogleAuthProvider();
    const promise = firebase.auth().signInWithPopup(provider);

    promise.then((result) => {
      var user = result.user;
      console.log(user);
      this.continue();
    });
    promise.catch((e) => {
      var msg = e.message;
      console.log(msg);
      this.setState({ err: msg });
    });
  }

  // component() {
  //   return <UserForms />;
  // }

  constructor(props) {
    super(props);

    this.state = {
      err: " ",
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.signupgoogle = this.signupgoogle.bind(this);
    // this.component = this.component.bind(this);
  }
  render() {
    return (
      <div className="head">
        <h1>INDIAN RAILWAY SYSTEM</h1>
        <div className="App">
          <input
            type="email"
            ref="email"
            id="email"
            placeholder="Enter the Email-id"
          />
          <br />
          <input
            type="password"
            ref="password"
            id="pass"
            placeholder="Enter the password"
          />
          <br />
          <p>{this.state.err}</p>
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Signup</button>
          <br />
          <button onClick={this.signupgoogle}>Sign-up-With-Google</button>
        </div>
      </div>
    );
  }
}

export default App;
