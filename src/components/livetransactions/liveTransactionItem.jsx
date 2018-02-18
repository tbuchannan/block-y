import React from 'react';

class LiveTransactionItem extends React.Component {
  render() {
    const { data } = this.props;
    let date = new Date(data.x.time * 1000);
    debugger
    return (
      <li>
        <label>Hash: {data.x.hash}</label>
        <label>Date: {date.toLocaleDateString()}</label>
        <label>Time: {date.toLocaleTimeString()}</label>
        <label>Size: {data.x.size} (in bytes)</label>
      </li>
    );
  }
}
export default LiveTransactionItem;
