import React from 'react';
import '../../styles/balance.css';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';


class Balance extends React.Component {
  render() {
    const {info, isLoading} = this.props;
    return isLoading ? (
      <div>
        <br/>
        <CircularProgress />
      </div>
    ) :
    info.address ? (
      <div className="balance">
       <Paper className="paper" zDepth={1} >
        <label>Address: {this.props.info.address}</label><br/>
        <label>Total Received: {this.props.info.total_received / 100000000} BTC</label><br/>
        <label>Total Sent: {this.props.info.total_sent / 100000000} BTC</label><br/>
        <label>Remaining Balance: {this.props.info.final_balance / 100000000} BTC</label><br/>
        </Paper>
      </div>
    ) : null;
  }
}

export default Balance;