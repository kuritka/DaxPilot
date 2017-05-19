// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {

 constructor(props, context) {
     super(props, context);
     this.getHeaderMenu = this.getHeaderMenu.bind(this);
  }

  getHeaderMenu() {
    if( this.props.location.pathname != "/")
    {
      return <Header loading={this.props.loading} />;
    }
  } 

  render() {
    return (
      <div>        
        {this.props.children}
        {this.getHeaderMenu()}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired, 
  location: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
