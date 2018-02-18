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
      let parsedMessage = JSON.parse(message.data);
      this.setState({transactions: [parsedMessage].concat(this.state.transactions)});
    };
  }

  render() {
    return(
      <ul>
        {this.state.transactions.map((data, idx) =>
            <LiveTransactionItem key={idx} data={data}/>
          )}
      </ul>
    );
  }
}
export default LiveTransactionIndex;