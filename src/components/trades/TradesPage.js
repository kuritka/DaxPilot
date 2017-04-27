import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as tradesActions from '../../actions/tradeActions';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';


 const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
  ];


class TradesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    tradesActions.loadTradesAsync();
  }

 

  render() {
    const {trades} = this.props;
    return (
      <div>
        <h1>Trades - chart test</h1>
        <p>Some text inside</p>
         {/*{trades.map(trade =>
             <p key={trade.id} >{trade.datetime}<span width="2em"/>{trade.price}</p>
          )}*/}

          <LineChart width={400} height={300} data={trades}>
              <Line type="monotone" dataKey="price" stroke="#EF1818" />
               <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               <XAxis dataKey="datetime" />
               <YAxis />
          </LineChart>

        <p>...</p>
      </div>
    );
  }
}

TradesPage.propTypes = {
  trades: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    trades: state.trades
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tradesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TradesPage);


