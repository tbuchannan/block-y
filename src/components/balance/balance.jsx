import React from 'react';
import '../../styles/balance.css';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';

class Balance extends React.Component {
  render() {
    const {info, isLoading} = this.props;
    return isLoading ? (
      <div>
        <br/>
        <CircularProgress />
      </div>
    ) :
    info.address ? (
      <div className="balance">
        <Paper className="paper" zDepth={1} >
          <List>
            <label>Balance</label>
            <Divider />
            <ListItem
              nestedItems={[
                <ListItem key={info.address}>Address: {info.address}</ListItem>,
                <ListItem key={info.total_received}>Total Received: {info.total_received / 100000000} BTC</ListItem>,
                <ListItem key={info.total_sent}>Total Sent: {info.total_sent / 100000000} BTC</ListItem>,
                <ListItem key={info.final_balance}>Remaining Balance: {info.final_balance / 100000000} BTC</ListItem>,
              ]}/>
          </List>
        </Paper>
      </div>
    ) : null;
  }
}

export default Balance;