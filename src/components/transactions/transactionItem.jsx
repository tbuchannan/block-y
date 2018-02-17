import React from 'react';

class TransactionItem extends React.Component {

  render() {
    const { info } = this.props;
    return (
      <li>
        <div>
          Time:{new Date(info.time * 1000)}<br/>
          Transaction number: {info.hash}
        </div>

      </li>
    );
  }
}
export default TransactionItem;