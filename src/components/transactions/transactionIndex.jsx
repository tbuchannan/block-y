import React from 'react';
import TransactionItem from './transactionItem.jsx';

class TransactionIndex extends React.Component {
  render() {
    const { transactions } = this.props;
    return(
      <ul>
        {transactions.map((item, idx) =>
            <TransactionItem key={idx} info={item} random={idx} />
          )}
      </ul>
    );
  }
}

export default TransactionIndex;