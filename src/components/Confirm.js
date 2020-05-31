import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    //For Backend
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
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
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText=" gender" secondaryText={gender} />
            <ListItem primaryText="dob" secondaryText={dob} />
            <ListItem primaryText="from" secondaryText={from} />
            <ListItem primaryText="to" secondaryText={to} />
            <ListItem primaryText="tickets" secondaryText={tickets} />
            <ListItem primaryText="category" secondaryText={category} />
            <ListItem primaryText="phno" secondaryText={phno} />
            <ListItem primaryText="address" secondaryText={address} />
            <ListItem primaryText="trains" secondaryText={trains} />
          </List>
          <br />
          <RaisedButton
            label="Cofirm & Continue"
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

export default FormUserDetails;
