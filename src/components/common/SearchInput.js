import React, {PropTypes} from 'react';
import BrowserDetection from 'react-browser-detection';


const browserHandler = {
        edge: () => <div></div>,
        default: () =><button className="close-icon" type="reset"></button>
      };

const SearchInput = ({name,  onChange, placeholder, value}) => {

    let wrapperClass = 'flex-row flex-row--align-v-center searchBoxWrapper';

    


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
          <BrowserDetection>{browserHandler}</BrowserDetection>          
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
