import React, {PropTypes} from 'react';
import { browserHistory,Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';



const Header = ({loading}) => {
  return (
    <nav>
      <i onClick={browserHistory.goBack}  className="fa fa-arrow-circle-left header-menu-navigation"></i>
      <i className="fa fa-home header-menu-navigation" onClick={function() {browserHistory.push('/');}} ></i>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
