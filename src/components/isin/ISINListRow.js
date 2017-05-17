import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ISINListRow = ({isin}) => {
  return (
    <li>
        <Link key={isin.isin} className="isin-each" to={"/isins/"+isin.isin}  activeClassName="gridItem">{isin.isin}</Link>
    </li>
  );
};

ISINListRow.propTypes = {
  isin: PropTypes.object.isRequired
};

export default ISINListRow;