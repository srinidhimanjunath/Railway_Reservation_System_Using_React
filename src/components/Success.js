import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { v4 as uuidv4 } from "uuid";

class Success extends Component {
  componentWillMount(nextProps, nextState) {
    const firebase = this.props.firebase;
    localStorage.setItem("firstName", this.props.values.firstName);
    localStorage.setItem("lastName", this.props.values.lastName);
    localStorage.setItem("email", this.props.values.email);
    localStorage.setItem("gender", this.props.values.gender);
    localStorage.setItem("occupation", this.props.values.occupation);
    localStorage.setItem("dob", this.props.values.dob);
    localStorage.setItem("from", this.props.values.from);
    localStorage.setItem("to", this.props.values.to);
    localStorage.setItem("tickets", this.props.values.tickets);
    localStorage.setItem("phno", this.props.values.phno);
    localStorage.setItem("address", this.props.values.address);
    localStorage.setItem("trains", this.props.values.trains);
    firebase
      .database()
      .ref("data/" + uuidv4())
      .set({
        firstName: this.props.values.firstName,
        lastName: this.props.values.lastName,
        email: this.props.values.email,
        gender: this.props.values.gender,
        occupation: this.props.values.occupation,
        dob: this.props.values.dob,
        from: this.props.values.from,
        to: this.props.values.to,
        tickets: this.props.values.tickets,
        phno: this.props.values.phno,
        trains: this.props.values.trains,
      });
  }

  render() {
    const { values } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Successfully Updated" />
          <h1>Thank You MR.{`${values.firstName} ${values.lastName}`}</h1>
          <p>
            You will get a email on this regard to the mail id : {values.email}{" "}
          </p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
