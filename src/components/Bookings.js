import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

export default class Bookings extends Component {

	getGuestInfo() {
		
	}

	render() {
		return (
  <div className='row'>
    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
      <textarea
        className='fullwidth guestList'
        ref='guestList'
        type='text'
        placeholder='Enter the guest list (one guest per line)'
      />
    </div>
    <div className='col-xs-12  col-sm-6 col-md-6 col-lg-6'>
      <textarea
        className='fullwidth guestDateList'
        ref='guestDateList'
        type='text'
        placeholder='Enter the date range for each guests stay (one range per line)'
      />
    </div>
  </div>
);

	}
}

// Uncomment the below snippet
// Bookings.propTypes = {
// 	mealPlan: PropTypes.func,
// 	invalidBookings: PropTypes.func
// }

