import React from 'react'
import "./reservation.css"
import {useState} from 'react'

const BookingForm = (props) => {
  const [date, setDate] = useState("date");
  const [guests, setGuests] = useState("guests");
  const [occasion, setOccasion] = useState("occasion");

  return (
    <div className='form-container'>
      <form>
        <div className='field'>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div className='field'>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time">
            {props.availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div className='field'>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
        </div>
        <div className='field'>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <input className='submit-button' type="submit" value="Make Your reservation" />
      </form>
    </div>
  )
}

export default BookingForm