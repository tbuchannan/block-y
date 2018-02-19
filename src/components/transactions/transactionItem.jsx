import React from 'react';
import Paper from 'material-ui/Paper';
import '../../styles/transactions.css';
import ListItem from 'material-ui/List';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TransactionItem extends React.Component {
  render() {
    const { info, rowKey } = this.props;
    let date = new Date(info.time * 1000);
    return (
      <TableRow key={rowKey}>
        <TableRowColumn style={{textAlign: 'center'}}>{info.hash}</TableRowColumn>
        <TableRowColumn style={{textAlign: 'center'}}>{date.toLocaleDateString()}</TableRowColumn>
        <TableRowColumn style={{textAlign: 'center'}}>{date.toLocaleTimeString()}</TableRowColumn>
      </TableRow>
    );
  }
}
export default TransactionItem;

// <ListItem>
//   <Paper className="transPaper" zDepth={1} >
//     <label>Transaction number: {info.hash} </label>
//
//     <label>Received Time: {} {}</label>
//   </Paper>
// </ListItem>
