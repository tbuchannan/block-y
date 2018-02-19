import React from 'react';
import '../../styles/transactions.css';
import { TableRow, TableRowColumn } from 'material-ui/Table';

class TransactionItem extends React.Component {
  render() {
    const { data, rowKey} = this.props;
    const hashStyle = {
      textAlign: 'center',
      whiteSpace: 'normal',
      width: '65%',
      wordWrap: 'break-word'};
    let date = new Date(56564454556 * 1000);

    return (
      <TableRow key={rowKey}>
        <TableRowColumn style={hashStyle}>{data.hash}</TableRowColumn>
        <TableRowColumn
          style={{textAlign: 'center', width: '19%',}}>
            {date.toLocaleDateString()}
        </TableRowColumn>
        <TableRowColumn
          style={{textAlign: 'center', width: '20%',}}>
          {date.toLocaleTimeString()}
        </TableRowColumn>
      </TableRow>
    );
  }
}
export default TransactionItem;
