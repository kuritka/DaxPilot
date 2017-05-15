import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import SearchISINForm from './SearchISINForm';
import * as isinActions from '../../actions/isinActions';
import ISINList from './ISINList';
import ISINTotalCount from './ISINTotalCount';

class ISINPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.search = this.search.bind(this);    
  } 


  search(event){
    event.preventDefault();
    let query = event.target.value;
    isinActions.searchISINs(query);    
  }


  render() {
    const {isins} = this.props;
    return (
      <div>
        <SearchISINForm search={this.search}  />
        <ISINList isins={isins} />
        <ISINTotalCount isinsCount={isins.length} totalCount={this.props.totalCount}  />        
      </div>
    );
  }
}

ISINPage.propTypes = {
  isins: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  totalCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {  
  return {    
    isins: state.isinObject.isins,
    totalCount: state.isinObject.totalCount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(isinActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ISINPage);


