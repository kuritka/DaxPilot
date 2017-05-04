import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import SearchISINForm from './SearchISINForm';
import * as isinActions from '../../actions/isinActions';


class ISINPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.search = this.search.bind(this);
  } 


  search(event){
    event.preventDefault();
    let query = event.target.value;
    isinActions.loadISINsAsync('DE55');//.then(() => console.log('jupiii'));
      // .catch(error => {
      //   toastr.error(error);
      //   this.setState({saving: false});
      // });
  }


  render() {
    const {isins} = this.props;
    return (
      <div>
        
        <SearchISINForm search={this.search}  />
        
        {isins.map(isin =>
             <p key={isin.id} >{isin.product}<span width="2em"/>{isin.id}&nbsp;{isin.product}</p>
          )}
      </div>
    );
  }
}

ISINPage.propTypes = {
  isins: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(ISINPage);


