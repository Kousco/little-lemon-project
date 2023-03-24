import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookingPage from '../reservations/BookingPage'
import Chicago from './chicago/Chicago'
import Homepage from './homepage/Homepage'
import "./main.css"
import { useState } from 'react'

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Chicago />} />
        <Route path='/reservations'element={<BookingPage/>} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
      </Routes>
    </div>
  )
}

export default Main