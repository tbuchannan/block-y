import React from 'react';
import LiveTransactionIndex from '../livetransactions/liveTransactionIndex.jsx';
import Balance from '../balance/balance.jsx';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
      info: {},
      transactions: [],
      subs: [],
      errors: null,
      isLoading: false
    };
    this.socket = new WebSocket('wss://ws.blockchain.info/inv');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchBalance = this.fetchBalance.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.socket.send(`{"op":"addr_sub", "addr":"${this.state.address}"}`);
    this.setState({isLoading: true}, this.fetchBalance);
  }

  fetchBalance() {
    const newSubs = [...this.state.subs, this.state.address];
    fetch(`/rawaddr/${this.state.address}`)
      .then(this.handleErrors)
      .then(result => result.json())
      .then(data => this.setState({info: data, transactions: data.txs, subs: newSubs, isLoading: false}))
      .catch(error => this.setState({info: {}, errors: error.toString(), isLoading: false}));
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
        <TextField
          hintText="Enter bitcoin address"
          errorText={this.state.errors}
          onChange={this.handleChange}
          /> <br/>
        <RaisedButton label="Search" primary={true} onClick={this.handleSubmit}/>

        <Balance info={this.state.info} isLoading={this.state.isLoading}/>

        <LiveTransactionIndex
          transactions={this.state.transactions}
          socket={this.socket}/>
      </div>
    );
  }
}
export default Widget;