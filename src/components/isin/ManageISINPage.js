import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as isinActions from '../../actions/isinActions';
import SearchISINForm from './SearchISINForm';
import toastr from 'toastr';


export class ManageISINPage extends React.Component {
   
    constructor(props, context) {
        super(props, context);
        this.state = {
            isin: Object.assign({}, props.isin),
            errors: {},
            searching: false
        };
        this.searchIsin = this.searchIsin.bind(this);
        this.changeIsin = this.changeIsin.bind(this);
    }


    searchIsin(isinCode){
    }

    changeIsin(){
    }


    render() {
        return (
            <SearchISINForm 
                onChange={this.changeIsin}
                onSearch={this.searchIsin}
                isin={this.state.isin}
                errors={this.state.errors}
                searching={this.state.saving}
            />);
    }
  }


ManageISINPage.propTypes = {
      isin: PropTypes.object.isRequired
};



function mapStateToProps(state, ownProps) {
  return {
    isin: ''
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(isinActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageISINPage);
