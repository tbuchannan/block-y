import React from 'react';
import Paper from 'material-ui/Paper';
import '../../styles/transactions.css';

class LiveTransactionItem extends React.Component {
  render() {
    const { data } = this.props;
    let date = new Date(data.x.time * 1000);
    return (
      <li className="listItem">
        <Paper className="paper" zDepth={1} >
        <label>Hash: {data.x.hash}</label><br/>
        <label>
          Received Time: {date.toLocaleTimeString()} {date.toLocaleDateString()}
        </label><br/>
        <label>Size: {data.x.size} (in bytes)</label>
        </Paper>
      </li>
    );
  }
}
export default LiveTransactionItem;
