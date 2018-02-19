import React from 'react';
import LiveTransactionIndex from '../livetransactions/liveTransactionIndex.jsx';
import TransactionIndex from '../transactions/transactionIndex.jsx';
import Balance from '../balance/balance.jsx';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../../styles/widget.css';


class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
      balance: {},
      transactions: [],
      liveTransactions: [],
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
    this.socket.send(`{"op":"addr_unsub", "addr":"${this.state.address}"}`);
    this.socket.send(`{"op":"addr_sub", "addr":"${this.state.address}"}`);
    // this.socket.send(`{"op":"unconfirmed_sub"}`);
    this.setState({isLoading: true}, this.fetchBalance);
  }

  fetchBalance() {
    const newSubs = [...this.state.subs, this.state.address];
    fetch(`/rawaddr/${this.state.address}`)
      .then(this.handleErrors)
      .then(result => result.json())
      .then(data => this.setState({balance: data, transactions: data.txs, subs: newSubs, isLoading: false, address: ""}))
      .catch(error => this.setState({balance: {}, errors: error.toString(), isLoading: false, address: ""}));
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
        <div className ="searchContainer">
          <TextField
            className="searchText"
            hintText="Enter bitcoin address"
            errorText={this.state.errors}
            onChange={this.handleChange}
            value={this.state.address}
          />
        <br/>
          <RaisedButton label="Search" primary={true} onClick={this.handleSubmit}/>
        </div>

        <Balance info={this.state.balance} isLoading={this.state.isLoading}/>
        <div className ="transactionContainer">
          <TransactionIndex
            transactions={this.state.transactions}
            isLoading={this.state.isLoading}
            />
          <LiveTransactionIndex
            liveTransactions={this.state.liveTransactions}
            isLoading={this.state.isLoading}
            socket={this.socket}/>
        </div>
      </div>
    );
  }
}
export default Widget;