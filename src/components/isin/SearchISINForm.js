import React from 'react';
import TextInput from '../common/TextInput';


const SearchISINForm = ({isin, onSearch, onChange, searching, errors}) => {
    return(
        <form>
            <h2>ISIN : </h2>
            <TextInput
                name="isin"
                label="ISIN"
                value={isin.Id}
                onChange={onChange}
                error={errors.title}/>
            <input
                type="submit"
                disabled={searching}
                value={searching ? 'Searching...' : 'Search'}
                className="btn btn-primary"
                onClick={onSearch}/>
        </form>
    );    
};


SearchISINForm.propTypes = {
  isin: React.PropTypes.object.isRequired,
  onSearch: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  searching: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SearchISINForm;