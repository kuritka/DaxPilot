import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as tradesActions from '../../actions/tradeActions';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';


class TradesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {loading: true};
    this.GetChartIfDataExists = this.GetChartIfDataExists.bind(this);    
  }

  componentWillMount(){    
    tradesActions.getTradesAsync(this.props.location.query.isin, () => {this.setState({loading: false});});
  }


  GetChartIfDataExists(trades){
    if(this.state.loading)
    {
      return <h3>Loading...</h3>;
    }
    else
    {
      if(trades.length > 0){
        return <LineChart width={400} height={300} data={trades}>
                <Line type="monotone" dataKey="price" stroke="#EF1818" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="datetime" />
                <YAxis />
            </LineChart>;
       }
       else
         return <h3>No Data</h3>;
      }
    }

  render() {    
    const {trades} = this.props;
    return (
      <div>
        <h1>{this.props.location.query.isin}</h1>        
          {this.GetChartIfDataExists(trades)}
           {/*{trades.map(trade =>
             <p key={trade.id} >{trade.datetime}<span width="2em"/>{trade.price}</p>
          )}*/}
      </div>
    );
  }
}

TradesPage.propTypes = {
  trades: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
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


