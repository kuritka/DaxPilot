import React, {PropTypes} from 'react';

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
          <button className="close-icon" type="reset"></button>
          
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
