import React from 'react';
import '../../styles/transactions.css';
import { TableRow, TableRowColumn } from 'material-ui/Table';

class LiveTransactionItem extends React.Component {
  render() {
    const { data, rowKey} = this.props;
    let date = new Date(data.x.time * 1000);
    return (
      <TableRow key={rowKey}>
        <TableRowColumn style={{textAlign: 'center'}}>{data.x.hash}</TableRowColumn>
        <TableRowColumn style={{textAlign: 'center'}}>{date.toLocaleDateString()}</TableRowColumn>
        <TableRowColumn style={{textAlign: 'center'}}>{date.toLocaleTimeString()}</TableRowColumn>
      </TableRow>
    );
  }
}
export default LiveTransactionItem;
