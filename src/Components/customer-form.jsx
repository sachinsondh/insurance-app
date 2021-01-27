import React, { Component } from "react";
import axios from "axios";

import Joi from "joi-browser";

class CustomerForm extends Component {
  state = {
    account: [
      {
        _id: "",
        Policy_id: "",
        Date_of_Purchase: "",
        Customer_id: "",
        Fuel: "",
        Vehicle_segment: "",
        Premium: "",
        bodily_injury_liablity: "",
        personal_injury_protection: "",
        property_damage_liablity: "",
        collision: "",
        comprehensive: "",
        Customer_Gender: "",
        Customer_Income_group: "",
        Customer_Region: "",
        Customer_Marital_status: "",
      },
    ],
  };
  schema = {
    Premium: Joi.number().min(0).max(1000000).required(),
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema);
    console.log(result);
  };

  async componentDidMount() {
    try {
      const policy_id = this.props.match.params.id;
      if (!policy_id) return console.log("Invalid data");

      await axios.get(`http://localhost:3000/${policy_id}`).then((res) => {
        this.setState({ account: res.data });
      });
    } catch (ex) {
      console.log("Invalid request", ex);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account });
  };
  render() {
    const {
      Policy_id,
      Date_of_Purchase,
      Customer_id,
      Fuel,
      Vehicle_segment,
      Premium,
      bodily_injury_liablity,
      personal_injury_protection,
      property_damage_liablity,
      collision,
      comprehensive,
      Customer_Gender,
      Customer_Income_group,
      Customer_Region,
      Customer_Marital_status,
    } = this.state.account[0];

    return (
      <div>
        <h1>Customer form </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Policy_id">Policy_id</label>
            <input
              onChange={this.handleChange}
              value={Policy_id || ""}
              name="Policy_id"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Date_of_Purchase">Date_of_purchase</label>
            <input
              onChange={this.handleChange}
              value={Date_of_Purchase || ""}
              name="Date_of_Purchase"
              type="text"
              className="form-control"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Customer_id</label>
            <input
              onChange={this.handleChange}
              value={Customer_id || ""}
              name="Customer_id"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Fuel</label>
            <input
              onChange={this.handleChange}
              value={Fuel || ""}
              name="Fuel"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Vehicle_segment</label>
            <input
              onChange={this.handleChange}
              value={Vehicle_segment || ""}
              name="Vehicle_segment"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Premium</label>
            <input
              onChange={this.handleChange}
              value={Premium || ""}
              name="Premium"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Body_injury_liablity</label>
            <input
              onChange={this.handleChange}
              value={bodily_injury_liablity || 1}
              name="bodily_injury_liablity"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Personal_injury_protection</label>
            <input
              onChange={this.handleChange}
              value={personal_injury_protection || 0}
              name="personal_injury_protection"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Property_damage_liablity</label>
            <input
              onChange={this.handleChange}
              value={property_damage_liablity || 1}
              name="property_damage_liablity"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Collison</label>
            <input
              onChange={this.handleChange}
              value={collision || 1}
              name="collision}"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Comprehensive</label>
            <input
              onChange={this.handleChange}
              value={comprehensive || 0}
              name="comprehensive"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Gender</label>
            <input
              onChange={this.handleChange}
              value={Customer_Gender || ""}
              name="Customer_Gender"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Income_group</label>
            <input
              onChange={this.handleChange}
              value={Customer_Income_group || ""}
              name="Customer_Income_group"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Region</label>
            <input
              onChange={this.handleChange}
              value={Customer_Region || ""}
              name="Customer_Region"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Marital_status</label>
            <input
              onChange={this.handleChange}
              value={Customer_Marital_status || ""}
              name="Customer_Marital_status"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default CustomerForm;
