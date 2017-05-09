import React, {PropTypes} from 'react';



 
let weekdays = [
		"Sunday", "Monday", "Tuesday",
		"Wednesday", "Thursday", "Friday",
		"Saturday"
	],
	months = [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	];


  // Append a suffix to dates.
  // Example: 23 => 23rd, 1 => 1st.
  function nth(d) {
      if(d>3 && d<21) return 'th';
      switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
   }

 function formatDate (dateAsNumber) {
     debugger;
     let date = new Date(Math.floor(dateAsNumber));
    return weekdays[date.getDay()] + ", " +
        date.getDate() + nth(date.getDate()) + " " +
        months[date.getMonth()] + " " +
        date.getFullYear();
  }


const SliderValues = ({from}, {to}) => {
        return (
            <div className="flex-row flex-row--align-h-center">
                <div className="flex-col-sm-5">
                    <h4>{formatDate(from)}</h4>
                </div>
                <div className="flex-col-sm-5">                    
                    <h4>{formatDate(to)}</h4>
                </div>
            </div>
        );
};


SliderValues.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired
};

export default SliderValues;