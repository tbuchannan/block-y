import React from 'react';
import TransactionIndex from '../transactions/transactionIndex.jsx';
import LiveTransactionIndex from '../livetransactions/liveTransactionIndex.jsx';
import Balance from '../balance/balance.jsx';


class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
      info: {},
      transactions: [],
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
      .then(data => this.setState({info: data, transactions: data.txs}))
      .catch(error => this.setState({info: {}, errors: error.toString()}));
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
        <Balance info={this.state.info} />
        <LiveTransactionIndex />
      </div>
    );
  }
}
// <TransactionIndex transactions={this.state.transactions} />
export default Widget;