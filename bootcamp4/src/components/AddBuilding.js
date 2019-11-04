import React, { Component } from "react";

export default class AddBuilding extends Component {
  constructor(props) {
    super(props);
    this.state = { Code: "", Name: "", Address: "" };

    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCodeChange(event) {
    this.setState({ Code: event.target.value });
  }
  handleNameChange(event) {
    this.setState({ Name: event.target.value });
  }
  handleAddressChange(event) {
    this.setState({ Address: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A building was submitted: \n" +
        "Code: " +
        this.state.Code +
        "\n" +
        "Name: " +
        this.state.Name +
        "\n" +
        "Address: " +
        this.state.Address
    );
    this.props.data.push({
      id: this.props.data.length + 5,
      code: this.state.Code,
      name: this.state.Name,
      address: this.state.Address
    });
    this.props.test(this.props.data);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Code:
          <input
            type="text"
            Code={this.state.value}
            onChange={this.handleCodeChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            Name={this.state.value}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Address:
          <input
            style={{}}
            type="text"
            Address={this.state.value}
            onChange={this.handleAddressChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
