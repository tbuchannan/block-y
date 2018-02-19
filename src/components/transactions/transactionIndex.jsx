import React from 'react';
import TransactionItem from './transactionItem.jsx';
import List from 'material-ui/List';

class TransactionIndex extends React.Component {
  render() {
    const { isLoading, transactions } = this.props;
    return isLoading ? null : (
      <List className="listIndex">
        <label>Transactions</label>
        {transactions.map((item, idx) =>
            <TransactionItem key={idx} info={item} random={idx} />
          )}
      </List>
    );
  }
}

export default TransactionIndex;