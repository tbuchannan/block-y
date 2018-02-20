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

class TransactionIndex extends React.Component {
  render() {
    const centerCol = {textAlign: 'center'};
    const { transactions } = this.props;
    const hashStyle = {
      textAlign: 'center',
      paddingLeft: '30%',
      };
    const sizeStyle = {textAlign: 'center', paddingLeft: '12%',};
    const timeStyle = {textAlign: 'center', paddingLeft: '32%',};

    // Iterate over transactions and add a table row for each transaction
    return (
      <div className="listIndex">
        <Table  fixedFooter={false} height={'300px'}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn
                style={centerCol}
                colSpan="3"> Incoming Transactions
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn style={hashStyle}>Hash</TableHeaderColumn>
              <TableHeaderColumn style={timeStyle}>Received Time</TableHeaderColumn>
              <TableHeaderColumn style={sizeStyle}>Size</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {transactions.map((data, idx) =>
              <TransactionItem key={idx} data={data} rowKey={idx}/>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}
export default TransactionIndex;