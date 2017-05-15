import React, {PropTypes} from 'react';


const ISINTotalCount = ({isinsCount, totalCount}) => {
    return(
        <div>{isinsCount} of {totalCount}</div>
    );
};

ISINTotalCount.propTypes = {
  isinsCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired
};

export default ISINTotalCount;