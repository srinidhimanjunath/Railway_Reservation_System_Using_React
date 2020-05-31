import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";

class PersonelDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  func = (event) => {
    var e = document.getElementById("gender");
    var result = e.options[e.selectedIndex].value;
    event.preventDefault();
    console.log(result);
    this.props.handleTrain("gender", result);
  };
  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Railway Reservation System" />
          <TextField
            hint="Enter your Occupation"
            floatingLabelText="Occupation"
            onChange={this.props.handle("occupation")}
            defaultValue={values.occupation}
            required
          />
          <br />
          <TextField
            hint="Enter your Address"
            floatingLabelText="Address"
            onChange={this.props.handle("address")}
            defaultValue={values.address}
            required
          />
          <br />
          <TextField
            hint="Enter your Phone Number"
            floatingLabelText="PhoneNumber"
            onChange={this.props.handle("phno")}
            defaultValue={values.phno}
            required
          />
          <br />
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue={values.dob}
            onChange={this.props.handle("dob")}
            required
          />
          <br />
          <form>
            <label className="gender">Select Your Gender</label>
            <br />
            <select name="gender" id="gender" onChange={this.func.bind(this)}>
              <option value="---Select Your Gender---t">
                ---Select Your Gender---
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </form>
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
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

export default PersonelDetails;
