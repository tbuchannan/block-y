import React from 'react';
import '../../styles/transactions.css';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const _hashStyle = {
  textAlign: 'center',
  whiteSpace: 'normal',
  width: '65%',
  wordWrap: 'break-word'
};

const TransactionItem = props => {
  const { data, rowKey } = props;

  let date = new Date(data.time * 1000);

  // Parse transaction data and display as row
  return (
    <TableRow key={ rowKey }>
      <TableRowColumn style={ _hashStyle }>{ data.hash }</TableRowColumn>
      <TableRowColumn
        style={ { textAlign: 'center', width: '19%' } }>
          { date.toLocaleDateString() }
      </TableRowColumn>
      <TableRowColumn
        style={ { textAlign: 'center', width: '20%' } }>
        { date.toLocaleTimeString() }
      </TableRowColumn>
    </TableRow>
  );
};

export default TransactionItem;
