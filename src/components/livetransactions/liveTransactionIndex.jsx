import React from 'react';
import LiveTransactionItem from './liveTransactionItem.jsx';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import '../../styles/transactions.css';

class LiveTransactionIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      liveTransactions: [],
    };
  }

  componentDidMount() {
    // Event Listeners for socket events (Open, Close, Receive Message)
    this.props.socket.onopen = () => {
      console.log("CONNECTED");
    };

    this.props.socket.onclose = () => {
      console.log("DISCONNECTED");
    };


    this.props.socket.onmessage = (message) => {
      let parsedMessage = JSON.parse(message.data);
      this.setState({liveTransactions: [parsedMessage].concat(this.state.liveTransactions)});
    };
  }

  render() {
    const centerCol = {textAlign: 'center'};

    return this.props.isLoading ? null : (
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
              <TableHeaderColumn style={centerCol}>Hash</TableHeaderColumn>
              <TableHeaderColumn style={centerCol}>Received Time</TableHeaderColumn>
              <TableHeaderColumn style={centerCol}>Size</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.liveTransactions.map((data, idx) =>
              <LiveTransactionItem key={idx} data={data} rowKey={idx}/>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}
export default LiveTransactionIndex;