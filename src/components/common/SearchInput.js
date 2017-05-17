import React, {PropTypes} from 'react';
import BrowserDetection from 'react-browser-detection';
import BrowserHandler from './SearchInput.BrowserHandler';


const SearchInput = ({name,  onChange, placeholder, value}) => {

    let wrapperClass = 'flex-row flex-left-vertical-center searchForm';

    return (
    <div className={wrapperClass}>        
        <input
          type="text"
          name={name}
          required
          className="searchBox"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off" />
          <BrowserDetection>{BrowserHandler}</BrowserDetection>          
    </div>
    );
};
 

SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default SearchInput;
