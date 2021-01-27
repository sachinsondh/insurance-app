import React, { Component } from "react";

import axios from "axios";
import Display from "./barchart";

class Chart extends Component {
  state = {
    North: [],
    South: [],
    East: [],
    West: [],
    isopen: false,
    region:[],          //setting up chart component & getting data from server
  };
  async componentDidMount() {
    await axios
      .get("http://localhost:3000/api/1")
      .then((res) => {
        this.setState({ North: res.data.data });
        
      })
      .catch((err) => console.log(`Server Error: ${err}`));

    await axios
      .get("http://localhost:3000/api/2")
      .then((res) => {
        this.setState({ South: res.data.data });
        
      })
      .catch((err) => console.log(`Server Error: ${err}`));

    await axios
      .get("http://localhost:3000/api/3")
      .then((res) => {
        this.setState({ East: res.data.data });
        
      })
      .catch((err) => console.log(`Server Error: ${err}`));

    await axios
      .get("http://localhost:3000/api/4")
      .then((res) => {
        this.setState({ West: res.data.data });
        
      })
      .catch((err) => console.log(`Server Error: ${err}`));
  }

  toggleopen = () => {
    this.setState({isopen: !this.state.isopen});
  }
  


  render() {
    const menuClass = `dropdown-menu${this.state.isopen ? " show" : ""}`
    return (
      <div>
        <div className="dropdown" onClick={this.toggleopen}>
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Select Region
  </button>
  <ul className={menuClass} aria-labelledby="dropdownMenuButton">
    <li><span className="dropdown-item" onClick={() => this.setState({region:this.state.North})}>North</span></li>
    <li><span className="dropdown-item" onClick={() => this.setState({region:this.state.South})}>South</span></li>
    <li><span className="dropdown-item" onClick={() => this.setState({region:this.state.East})}>East</span></li>
    <li><span className="dropdown-item" onClick={() => this.setState({region:this.state.West})}>West</span></li>
  </ul>
</div>
        <h2>Policy Sale each month for  region </h2>
        <Display data={this.state.region} />
        
      </div>
    );
  }
}

export default Chart;
