import React, {PropTypes} from 'react';
import ISINListRow from './ISINListRow';

const ISINList = ({isins}) => {

  let wrapperClass = 'isin-box';

  return (
    <ul className={wrapperClass}>
      {isins.map(isin =>
        <ISINListRow key={isin.isin} isin={isin}/>
      )}
    </ul>
  );
};

ISINList.propTypes = {
  isins: PropTypes.array.isRequired
};

export default ISINList;