import React from 'react';
import Paper from 'material-ui/Paper';
import '../../styles/transactions.css';

class TransactionItem extends React.Component {
  render() {
    const { info } = this.props;
    let date = new Date(info.time * 1000);
    debugger
    return (
      <li>
        <Paper className="paper" zDepth={1} >
          Transaction number: {info.hash} <br/>
        Received Time: {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </Paper>
      </li>
    );
  }
}
export default TransactionItem;