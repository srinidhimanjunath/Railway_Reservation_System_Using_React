import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";

class UserLoginDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Railway Reservation System" />
          <TextField
            hint="Enter your FirstName"
            floatingLabelText="FirstName"
            onChange={this.props.handle("firstName")}
            defaultValue={values.firstName}
            required
          />
          <br />
          <TextField
            hint="Enter your LastName"
            required
            floatingLabelText="LastName"
            onChange={this.props.handle("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hint="Enter your Email-id"
            floatingLabelText="Email"
            onChange={this.props.handle("email")}
            defaultValue={values.email}
            required
          />
          <br />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default UserLoginDetails;
