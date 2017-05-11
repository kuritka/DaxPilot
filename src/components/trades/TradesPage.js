import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as tradesActions from '../../actions/tradeActions';
import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';
import Nouislider from 'react-nouislider';
import ReactDOM from 'react-dom';
import SliderValues from './SliderValues';
import ContainerDimensions from 'react-container-dimensions';
import Moment from 'moment';


const fromTimeStamp = new Date('2016').getTime();   
const toTimeStamp = new Date('2017').getTime();   

class TradesPage extends React.Component {

  constructor(props, context) {    
    super(props, context);    
    this.state = {
      loading: true,
      from: fromTimeStamp, 
      to: toTimeStamp 
    };
    this.GetChartIfDataExists = this.GetChartIfDataExists.bind(this);    
    this.OnChangeSlide = this.OnChangeSlide.bind(this);
  }

  componentWillMount(){   
    let fromDate = Moment(this.state.from).format("YYYY-MM-DD");
    let toDate = Moment(this.state.to).format("YYYY-MM-DD");  
    tradesActions.getTradesAsync(this.props.params.isinId, fromDate, toDate, () => {this.setState({loading: false});});
  }

  
  GetChartIfDataExists(trades){
    const dateFormat = (date) => { return Moment(date,"YYYY-MM-DD HH:mm Z").format('YYYY-MM-DD'); };
    if(this.state.loading)
    {
      return <h3>Loading...</h3>;
    }
    else
    {   
      if(trades.length > 0){        
        return ( 
          <ContainerDimensions>
              {({width}) => 
                <AreaChart width={width-50} height={350} data={trades} margin={{top:5, bottom: 5}}>
                        <Area type="monotone" dataKey="price" fill="#2B3587" animationDuration={300}  stroke="#000" dot={false}  />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="time" tickFormatter={dateFormat} />
                        <Tooltip/>
                        <YAxis domain="[min, dataMax + 50]"  />
                  </AreaChart>
              }
            </ContainerDimensions>
        );
       }
       else
         return <h3>No Data</h3>;
      }
  }


  OnChangeSlide(values){      
      let queryFrom = Number(values[0]);
      let queryTo = Number(values[1]);
      this.setState({from: queryFrom, to: queryTo});      
      let fromDate = Moment(queryFrom).format("YYYY-MM-DD");
      let toDate = Moment(queryTo).format("YYYY-MM-DD");  
      tradesActions.getTradesAsync(this.props.params.isinId, fromDate, toDate, () => {this.setState({loading: false});});
  }


  render() {        
    const {trades} = this.props;
    return (
      <div>        
        <h1>{this.props.params.isinId}</h1>        
          {this.GetChartIfDataExists(trades)}
          <div className="margin-top-2">
            <Nouislider 
                  range={{min: fromTimeStamp,  max: toTimeStamp }}
                  step={7 * 24 * 60 * 60 * 1000} 
                  start={[ this.state.from,  this.state.to]}
                  onChange={this.OnChangeSlide}
              />
            </div>
            <SliderValues  from={this.state.from} to={this.state.to} />
      </div>
    );
  }
}

TradesPage.propTypes = {
  trades: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
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


