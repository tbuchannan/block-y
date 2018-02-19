import React from 'react';
import TransactionItem from './transactionItem.jsx';
import '../../styles/transactions.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

class TransactionIndex extends React.Component {
  render() {
    const { isLoading, transactions } = this.props;
    const centerCol = {textAlign: 'center'};
    return isLoading ? null : (
      <div className="listIndex">
        <Table  fixedFooter={false} height={'300px'}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn
                style={centerCol}
                colSpan="3"> Transactions
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn style={centerCol}>Transaction</TableHeaderColumn>
              <TableHeaderColumn style={centerCol}>Received Time</TableHeaderColumn>
              <TableHeaderColumn style={centerCol}>Received Date</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {transactions.map((item, idx) =>
              <TransactionItem key={idx} info={item} rowKey={idx} />
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TransactionIndex;