import React from 'react';
import LiveTransactionItem from './liveTransactionItem.jsx';

class LiveTransactionIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      transactions: []
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
      console.log(message);
      // TODO: setState, concat new message into transactions
    };
  }

  render() {
    return(
      <ul>
        {this.state.transactions.map((item, idx) =>
            <LiveTransactionItem key={idx} />
          )}
      </ul>
    );
  }
}
export default LiveTransactionIndex;