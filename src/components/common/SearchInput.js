import React, {PropTypes} from 'react';

const SearchInput = ({name,  onChange, placeholder, value}) => {

    let wrapperClass = 'flex-row flex-row--align-v-center';

    return (
    <div className={wrapperClass}>
        <input
          type="text"
          name={name}
          className="searchBox"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
          />
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
