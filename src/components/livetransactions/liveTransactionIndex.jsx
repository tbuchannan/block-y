import React from 'react';
import LiveTransactionItem from './liveTransactionItem.jsx';
import '../../styles/transactions.css';

class LiveTransactionIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      liveTransactions: [],
    };
  }

  componentDidMount() {
    // Event Listeners for socket events (Open, Close, Receive Message)
    this.props.socket.onopen = () => {
      console.log("CONNECTED");
    };

    this.props.socket.onclose = () => {
      console.log("DISCONNECTED");
    };


    this.props.socket.onmessage = (message) => {
      let parsedMessage = JSON.parse(message.data);
      this.setState({liveTransactions: [parsedMessage].concat(this.state.liveTransactions)});
    };
  }

  render() {
    return this.props.isLoading ? null : (
      <ul className="listIndex">
        <label>Incoming Transactions</label>
        {this.state.liveTransactions.map((data, idx) =>
            <LiveTransactionItem key={idx} data={data}/>
          )}
      </ul>
    );
  }
}
export default LiveTransactionIndex;