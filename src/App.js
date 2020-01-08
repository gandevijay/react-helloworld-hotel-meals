import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			guestMealPlan: [],
			invalidBookings: []
		}
	}

	generateMealPlan(meals) {
	}

	invalidBookings(customerErrors) {
	}

	render() {
		return (
  <div className='container-fluid'>
    <center>
      <h2>HelloWorld Hotel</h2>
    </center>
    <div className='container'>
      <Bookings />
      <Error />
      <Meals />
    </div>
  </div>
);

	}
}

