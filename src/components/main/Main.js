import React, {useReducer, useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookingPage from '../reservations/BookingPage';
import {fetchAPI, submitAPI} from './availabilityApi';
import ConfirmedBooking from '../reservations/ConfirmedBooking';
import Home from '../main/home/Home'
import PageInProgress from './PageInProgress'
import OurStory from './home/ourStory/OurStory';

//below code for the bookingForm API
const initialAvailableTimes = [];

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times; // Update the state with the new available times
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initialAvailableTimes
  );

  const updateTimes = async (date) => {
    if (date !== '') {
      const times = await fetchAPI(date);
      dispatch({ type: 'UPDATE_TIMES', times });
    }
  };

  useEffect(() => {
    // Initialize available times with today's date
    const today = new Date();
    updateTimes(today);
  }, []);

  //below is code for the bookingForm submission
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const response = await submitAPI(formData);
    if (response) navigate('/confirmed-booking');
  }

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/reservations'
          element={<BookingPage
            updateTimes={updateTimes}
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />}
        />
        <Route
          path='/confirmed-booking'
          element={<ConfirmedBooking />}
        />
        <Route
          path='/menu'
          element={<PageInProgress />}
         />
         <Route
          path='/order-online'
          element={<PageInProgress />}
         />
         <Route
          path='/login'
          element={<PageInProgress />}
         />
         <Route
          path='/about'
          element={<OurStory />}
         />
      </Routes>
    </div>
  );
};



export default Main;