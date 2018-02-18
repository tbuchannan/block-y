import React from 'react';

class TransactionItem extends React.Component {

  render() {
    const { info } = this.props;
    let date = new Date(info.time * 1000);
    return (
      <li>Transaction number: {info.hash} <br/> {`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</li>
    );
  }
}
export default TransactionItem;