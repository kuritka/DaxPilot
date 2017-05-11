import React, {PropTypes} from 'react';
import Moment from 'moment';


const SliderValues = ({from, to}) => {
        return (
            <div className="flex-row flex-row--align-h-center margin-top-1">
                <div className="flex-col-sm-5">
                    <h1 className="content-center">From : {Moment(from).format('YYYY.MM.DD')}</h1>
                </div>
                <div className="flex-col-sm-5">    
                    <h1 className="content-center">To : {Moment(to).format('YYYY.MM.DD')}</h1>
                </div>
            </div>
        );
};


SliderValues.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired
};

export default SliderValues;