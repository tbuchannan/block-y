import React from 'react';
import LiveTransactionIndex from '../livetransactions/liveTransactionIndex.jsx';
import Balance from '../balance/balance.jsx';


class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
      info: {},
      transactions: [],
      subs: [],
      errors: null
    };
    this.socket = new WebSocket('wss://ws.blockchain.info/inv');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.socket.send(`{"op":"addr_sub", "addr":"${this.state.address}"}`);
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
          type="text"
          className="searchBar"
          placeholder="Enter bitcoin address"
          onChange={this.handleChange}
        />
        <button className="search"onClick={this.handleSubmit}>Search </button>
        <Balance info={this.state.info} />

        <LiveTransactionIndex
          transactions={this.state.transactions}
          socket={this.socket}/>
      </div>
    );
  }
}
export default Widget;