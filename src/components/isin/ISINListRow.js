import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ISINListRow = ({isin}) => {
  return (
    <div className="flex-row">
        <Link key={isin.isin} to={"/isins/"+isin.isin} className="gridItem"  activeClassName="gridItem">{isin.isin}</Link>
    </div>
  );
};

ISINListRow.propTypes = {
  isin: PropTypes.object.isRequired
};

export default ISINListRow;