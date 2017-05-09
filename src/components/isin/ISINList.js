import React, {PropTypes} from 'react';
import ISINListRow from './ISINListRow';

const ISINList = ({isins}) => {

  let wrapperClass = 'flex-row--align-v-center';

  return (
    <div className={wrapperClass}>
      {isins.map(isin =>
        <ISINListRow key={isin.isin} isin={isin}/>
      )}
    </div>
  );
};

ISINList.propTypes = {
  isins: PropTypes.array.isRequired
};

export default ISINList;