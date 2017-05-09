import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as tradesActions from '../../actions/tradeActions';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import Nouislider from 'react-nouislider';
import ReactDOM from 'react-dom';
import SliderValues from './SliderValues';


class TradesPage extends React.Component {

  constructor(props, context) {
    super(props, context);    
    this.GetChartIfDataExists = this.GetChartIfDataExists.bind(this);    
    this.OnChangeSlide = this.OnChangeSlide.bind(this);
    this.timestamp = this.timestamp.bind(this);
  }

  componentWillMount(){   
    this.state = {from:  this.timestamp('2016'), to: this.timestamp('2017')}; 
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
        return ( <LineChart width={400} height={300} data={trades}>
                <Line type="monotone" dataKey="price" stroke="#EF1818" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="time" />
                <YAxis />
        </LineChart>);
       }
       else
         return <h3>No Data</h3>;
      }
  }

  timestamp(str){
    return new Date(str).getTime();   
  }

  OnChangeSlide(values){      
      let queryFrom = Number(values[0]);
      let queryTo = Number(values[1]);
      this.setState({from: queryFrom, to: queryTo});
  }


  render() {    
    const {trades} = this.props;
    return (
      <div>
        <h1>{this.props.location.query.isin}</h1>        
          {this.GetChartIfDataExists(trades)}
           <Nouislider 
                range={{min: this.state.from,  max: this.state.to }}  
                step={7 * 24 * 60 * 60 * 1000} 
                start={[ this.timestamp('2016'),  this.timestamp('2017')]}
                onSlide={this.OnChangeSlide}
            />
            <SliderValues from={this.state.from} to={this.state.to} />
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


