import React from 'react';
import SearchInput from '../common/SearchInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as isinActions from '../../actions/isinActions';


class SearchISINForm extends React.Component {
    
   constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <form>                
                <SearchInput
                    name="isin"                    
                    label="ISIN code"
                    onChange={this.props.search} 
                    placeholder="Search" />            
            </form>
        );    
    }
}


SearchISINForm.propTypes = {
   search: React.PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    isins: state.isinObject.isins
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(isinActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchISINForm);