import React from 'react';
import TransactionIndex from '../transactions/transactionIndex.jsx';
import LinearProgress from 'material-ui/LinearProgress';
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
      errors: null,
      isLoading: false
    };
    this.socket = new WebSocket('wss://ws.blockchain.info/inv');
    this.fetchBalance = this.fetchBalance.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }
  componentDidMount() {
    // Event Listeners for socket events (Open, Close, Receive Message)
    this.socket.onopen = () => {
      console.log("CONNECTED");
    };

    this.socket.onclose = () => {
      console.log("DISCONNECTED");
    };

    this.socket.onmessage = (message) => {
      let parsedMessage = JSON.parse(message.data);
      this.handleMessage(parsedMessage);
    };
  }

  // API request to fetch balanceInfo of bitcoin address
  fetchBalance() {
    fetch(`rawaddr/${this.state.address}`)
      .then(this.handleErrors)
      .then(result => result.json())
      .then(data => this.setState({ balance: data, transactions: data.txs, isLoading: false, address: "", errors: null }))
      .catch(error => this.setState({ balance: {}, errors: error.toString(), isLoading: false, address: "" }));
  }

  // Subscribes to address
  handleSubmit(e) {
    e.preventDefault();
    this.socket.send(`{"op":"addr_sub", "addr":"${this.state.address}"}`);
    this.setState({ isLoading: true }, this.fetchBalance);
  }

  // Updates textfield
  handleChange(e) {
    e.preventDefault();
    this.setState({ address: e.target.value });
  }

  // Add incoming transactions into the transactions state
  handleMessage(newTx){
    this.setState({ transactions: [newTx].concat(this.state.transactions) });
  }

  // Throws error if response is an error
  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp;
  }

  render() {
    const style = !this.state.isLoading ? { display: 'none' } : null;
    const barStyle = this.state.isLoading ? "hidden" : "greyBar";
    return (
      <div>
        <LinearProgress style={ style } mode="indeterminate" />
        <div className={ barStyle }></div>
        <div className ="searchContainer">
          <TextField
            hintText="Enter bitcoin address"
            errorText={ this.state.errors }
            onChange={ this.handleChange }
            value={ this.state.address }
          />
        <br/>
          <RaisedButton label="Search" primary={ true } onClick={ this.handleSubmit }/>
        </div>
        <div className="infoContainer">
          <TransactionIndex
            className="transIndex"
            transactions={ this.state.transactions }
            handleMessage={ this.handleMessage }/>
          <Balance info={ this.state.balance }/>
        </div>
      </div>
    );
  }
}
export default Widget;