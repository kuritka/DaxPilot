import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ISINListRow = ({isin}) => {
  return (
    <div className="flex-row">
        <Link key={isin.id} to={"/trades?isin="+isin.id} activeClassName="active">{isin.id}&nbsp;{isin.product}</Link>
    </div>
  );
};

ISINListRow.propTypes = {
  isin: PropTypes.object.isRequired
};

export default ISINListRow;