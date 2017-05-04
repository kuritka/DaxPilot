import React from 'react';
import TextInput from '../common/TextInput';
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
                <h2>ISIN : </h2>
                <TextInput
                    name="isin"
                    label="ISIN code"
                    onChange={this.props.search} 
                    placeholder="DE1234567890" />
            </form>
        );    
    }
}


SearchISINForm.propTypes = {
   search: React.PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    isins: state.isins
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(isinActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchISINForm);