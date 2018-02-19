import React from 'react';
import Paper from 'material-ui/Paper';
import '../../styles/transactions.css';
import ListItem from 'material-ui/List';

class TransactionItem extends React.Component {
  render() {
    const { info } = this.props;
    let date = new Date(info.time * 1000);
    return (
      <ListItem>
        <Paper className="transPaper" zDepth={1} >
          <label>Transaction number: {info.hash} </label>

        <label>Received Time: {date.toLocaleDateString()} {date.toLocaleTimeString()}</label>
        </Paper>
      </ListItem>
    );
  }
}
export default TransactionItem;