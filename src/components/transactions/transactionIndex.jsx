import React from 'react';
import TransactionItem from './transactionItem.jsx';

class TransactionIndex extends React.Component {
  render() {
    const { isLoading, transactions } = this.props;
    return isLoading ? null : (
      <ul className="listIndex">
        <label>Transactions</label>
        {transactions.map((item, idx) =>
            <TransactionItem key={idx} info={item} random={idx} />
          )}
      </ul>
    );
  }
}

export default TransactionIndex;