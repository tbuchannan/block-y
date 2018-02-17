import React from 'react';
// 1FfmbHfnpaZjKFvyi1okTjJJusN455paPH

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
      request: {},
      errors: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`/rawaddr/${this.state.address}`)
      .then(this.handleErrors)
      .then(result => result.json())
      .then(data => this.setState({request: data}))
      .catch(error => this.setState({request: {}, errors: error.toString()}));
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({address: e.target.value});
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp;
  }

  render() {
    return (
      <div>
        <input
          className="searchBar"
          type="text"
          placeholder="Enter bitcoin address"
          onChange={this.handleChange}
        />
        <button
          className = "searchButton"
          onClick={this.handleSubmit}>Search
        </button>
        <p>{JSON.stringify(this.state.request)}</p>
        <p>{JSON.stringify(this.state.errors)}</p>
      </div>
    );
  }
}
export default Search;