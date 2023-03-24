import React from 'react'
import BookingForm from './BookingForm'
import "./reservation.css"

const BookingPage = (props) => {
  return (
    <div className='page-container'>
      <h2>Booking Page</h2>
      <BookingForm availableTimes={props.availableTimes} />
    </div>
  )
}

export default BookingPage