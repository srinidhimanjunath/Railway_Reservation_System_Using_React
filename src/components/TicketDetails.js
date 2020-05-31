import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";

class TicketDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  funct = () => {
    var e = document.getElementById("train-sel");
    var result = e.options[e.selectedIndex].value;
    console.log(result);
    this.props.handleTrain("trains", result);
  };
  funct1 = () => {
    var e = document.getElementById("cat-sel");
    var result = e.options[e.selectedIndex].value;
    console.log(result);
    this.props.handleTrain("category", result);
  };
  render() {
    const { values } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Railway Reservation System" />
          <form>
            <label>From:</label>
          </form>
          <TextField defaultValue={values.from} disabled="true" />
          <br />
          <form>
            <label>To:</label>
          </form>
          <TextField defaultValue={values.to} disabled="true" />
          <br />
          <TextField
            hint="Enter The Number of Tickets You want to Book??"
            required
            floatingLabelText="No of Tickets"
            onChange={this.props.handle("tickets")}
            defaultValue={values.tickets}
          />
          <br />
          <form>
            <label className="train">Select Your Preffered Train</label>
            <br />
            <select
              name="train"
              id="train-sel"
              onChange={this.funct.bind(this)}
              required
            >
              <option value="---Select the Train---">
                ---Select the Train---
              </option>
              <option value="Malgudi Express">Malgudi Express</option>
              <option value="Rajadhani Express">Rajadhani Express</option>
            </select>
          </form>
          <br />
          <form>
            <label>Departure Time:</label>
          </form>
          <TextField defaultValue="11:00" disabled="true" />
          <br />
          <form>
            <label className="cat">Select Your Preffered category</label>
            <br />
            <select
              name="cat"
              id="cat-sel"
              onChange={this.funct1.bind(this)}
              required
            >
              <option value="--Select The Category---">
                ---Select The Category---
              </option>
              <option value="AC">AC</option>
              <option value="General">General</option>
            </select>
          </form>
          <br />
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

export default TicketDetails;
