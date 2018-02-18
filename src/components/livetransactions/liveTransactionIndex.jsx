import React from 'react';
import LiveTransactionItem from './liveTransactionItem.jsx';

class LiveTransactionIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      transactions: []
    };
    this.socket = new WebSocket('wss://echo.websocket.org');
  }

  componentDidMount(){
    // Event Listeners for socket events (Open, Close, Receive Message)
    this.socket.onopen = () => {
      console.log("CONNECTED");
    };

    this.socket.onclose = () => {
      console.log("DISCONNECTED");
    };

    this.socket.onmessage = (message) => {
      console.log(message.data);
    };
  }

  // this.setState({transactions: this.state.messages.concat([ data ]})
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