import React, {PropTypes} from 'react';
import Moment from 'moment';


const SliderValues = ({from, to}) => {
        return (
            <div className="flex-row flex-row--align-h-center">
                <div className="flex-col-sm-5">
                    <h2>{Moment(from).format('YYYY.MM.DD')} - {Moment(to).format('YYYY.MM.DD')}</h2>
                </div>
            </div>
        );
};


SliderValues.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired
};

export default SliderValues;