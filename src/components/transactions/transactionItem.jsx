import React from 'react';
import '../../styles/transactions.css';
import { TableRow, TableRowColumn } from 'material-ui/Table';

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