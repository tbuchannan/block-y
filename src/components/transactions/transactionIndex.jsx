import React from 'react';
import TransactionItem from './transactionItem.jsx';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import '../../styles/transactions.css';

const _centerCol = { textAlign: 'center' };
const _hashStyle = { textAlign: 'center', paddingLeft: '30%' };
const _sizeStyle = { textAlign: 'center', paddingLeft: '12%' };
const _timeStyle = { textAlign: 'center', paddingLeft: '32%' };

const TransactionIndex = props => {
  const { transactions } = props;
  // Iterate over transactions and add a table row for each transaction
  return (
    <div className="listIndex">
      <Table  fixedFooter={ false } height={'300px'}>
        <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
          <TableRow>
            <TableHeaderColumn
              style={ _centerCol }
              colSpan="3"> Incoming Transactions
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn style={ _hashStyle }>Hash</TableHeaderColumn>
            <TableHeaderColumn style={ _timeStyle }>Received Time</TableHeaderColumn>
            <TableHeaderColumn style={ _sizeStyle }>Size</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {transactions.map((data, idx) =>
            <TransactionItem key={ idx } data={ data } rowKey={ idx }/>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionIndex;