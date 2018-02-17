import React from 'react';

class Balance extends React.Component {
  render() {
    const {info} = this.props;

    return info.address ? (
      <div>
        <label>Address: {this.props.info.address}</label><br/>
        <label>Total Received: {this.props.info.total_received / 100000000} BTC</label><br/>
        <label>Total Sent: {this.props.info.total_sent / 100000000} BTC</label><br/>
        <label>Remaining Balance: {this.props.info.final_balance / 100000000} BTC</label><br/>
      </div>
    ) : null;
  }
}

export default Balance;