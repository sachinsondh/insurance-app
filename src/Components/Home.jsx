import React, { Component } from "react";
import Table from "./table";
import axios from "axios";
import Pagination from "./Pagination";
import { paginate } from "./utils/paginate";
import SearchBox from "./searchbox";

class Home extends Component {
  state = {
    //setting up state & initialize with default values
    data: [],
    currentPage: 1,
    searchQuery: "",
    pageSize: 50,
  };
  async componentDidMount() {
    //using lifecycle hooks to get data from sever & populating our table
    await axios
      .get("http://localhost:3000/api")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => console.log(`Server Error: ${err}`));
  }

  handlePageChange = (page) => {
    //function to handle page change for pagination
    this.setState({ currentPage: page });
  };
  handleSearch = (query) => {
    //function to handle search
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  getPagedData = () => {
    //setting up data for a single page
    const { data, currentPage, searchQuery, pageSize } = this.state;
    let filtered = data;
    if (searchQuery)
      filtered = data.filter((p) => p.Policy_id.startsWith(searchQuery));
    const filteredData = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, filteredData };
  };

  render() {
    const { pageSize, currentPage, searchQuery } = this.state;

    const { totalCount, filteredData } = this.getPagedData(); //getting totalcount
    return (
      <div>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <Table data={filteredData} />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Home;
