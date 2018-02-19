import React from 'react';
import Paper from 'material-ui/Paper';

class LiveTransactionItem extends React.Component {
  render() {
    const { data } = this.props;
    let date = new Date(data.x.time * 1000);
    return (
      <li>
        <Paper className="paper" zDepth={1} >
        <label>Hash: {data.x.hash}</label>
        <label>Date: {date.toLocaleDateString()}</label>
        <label>Time: {date.toLocaleTimeString()}</label>
        <label>Size: {data.x.size} (in bytes)</label>
        </Paper>
      </li>
    );
  }
}
export default LiveTransactionItem;
