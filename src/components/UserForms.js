import React, { Component } from "react";
import UserLoginDetails from "./UserLoginDetails";
import PersonelDetails from "./PersonelDetails";
import TicketDetails from "./TicketDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import Login from "./Login";
const firebase = require("firebase");
var config = {
  apiKey: "AIzaSyAC8SaZVuNxBUZuMP9ylhtXzzVGJWLOubo",
  authDomain: "railwayreservationsystem-97627.firebaseapp.com",
  databaseURL: "https://railwayreservationsystem-97627.firebaseio.com",
  storageBucket: "railwayreservationsystem-97627.appspot.com",
  messagingSenderId: "1080943993255",
};
firebase.initializeApp(config);

class UserForms extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    occupation: "",
    dob: "",
    from: "Mysuru",
    to: "Banglore",
    tickets: "",
    category: " ",
    phno: " ",
    address: " ",
    trains: " ",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleTrain = (input, value) => {
    this.setState({ [input]: value });
  };

  handle = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      gender,
      occupation,
      dob,
      from,
      to,
      tickets,
      category,
      phno,
      address,
      trains,
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      gender,
      occupation,
      dob,
      from,
      to,
      tickets,
      category,
      phno,
      address,
      trains,
    };
    switch (step) {
      case 1:
        return <Login nextStep={this.nextStep} firebase={firebase} />;

      case 2:
        return (
          <UserLoginDetails
            nextStep={this.nextStep}
            handle={this.handle}
            values={values}
          />
        );
      case 3:
        return (
          <PersonelDetails
            nextStep={this.nextStep}
            handle={this.handle}
            prevStep={this.prevStep}
            handleTrain={this.handleTrain}
            values={values}
          />
        );
      case 4:
        return (
          <TicketDetails
            nextStep={this.nextStep}
            handle={this.handle}
            handleTrain={this.handleTrain}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 6:
        return <Success values={values} firebase={firebase} />;
    }
  }
}

export default UserForms;
