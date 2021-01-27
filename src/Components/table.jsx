import React from "react";
import { Link } from "react-router-dom";

const Table = (props) => {
  return (
    //setting tables component & populating it via props
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">Policy_id</th>
            <th className="table-header">Date_of_purchase</th>
            <th className="table-header">Customer_id</th>
            <th className="table-header">Fuel</th>
            <th className="table-header">Vehicle_segment</th>
            <th className="table-header">Premium</th>
            <th className="table-header">Body_injury_liablity</th>
            <th className="table-header">Personal_injury_protection</th>
            <th className="table-header">Property_damage_liability</th>
            <th className="table-header">Collision</th>
            <th className="table-header">Comprehensive</th>
            <th className="table-header">Gender</th>
            <th className="table-header">Income_group</th>
            <th className="table-header">Region</th>
            <th className="table-header">Marital_status</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((customer) => (
            <tr key={customer.Policy_id}>
              <td>
                <Link to={`/policy/${customer.Policy_id}`}>
                  {customer.Policy_id}
                </Link>
              </td>
              <td>{customer.Date_of_Purchase}</td>
              <td>{customer.Customer_id}</td>
              <td>{customer.Fuel}</td>
              <td>{customer.Vehicle_segment}</td>
              <td>{customer.Premium}</td>
              <td>{customer.bodily_injury_liability}</td>
              <td>{customer.personal_injury_protection}</td>
              <td>{customer.property_damage_liability}</td>
              <td>{customer.collision}</td>
              <td>{customer.comprehensive}</td>
              <td>{customer.Customer_Gender}</td>
              <td>{customer.Customer_Income_group}</td>
              <td>{customer.Customer_Region}</td>
              <td>{customer.Customer_Marital_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
