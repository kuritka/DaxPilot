import React, {PropTypes} from 'react';


const ISINTotalCount = ({isinsCount, totalCount, visible}) => {
    let className = visible ? "header-free-text visible" : "header-free-text hidden";
    let whatToShow = totalCount > isinsCount ?
                <div className={className}>{isinsCount} of {totalCount}</div>
            :   <div className={className}>{isinsCount} isin(s)</div>;
    return(
        whatToShow
        // <div className={className}>{isinsCount} of {totalCount}</div>
    );
};

ISINTotalCount.propTypes = {
  isinsCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  visible: PropTypes.bool
};

export default ISINTotalCount;