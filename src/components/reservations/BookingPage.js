import BookingForm from './BookingForm'
import "./reservation.css"

const BookingPage = (props) => {
  return (
    <div className='page-container'>
      <BookingForm
        availableTimes={props.availableTimes}
        updateTimes={props.updateTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
    </div>
  )
}

export default BookingPage