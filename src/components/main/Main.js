import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookingPage from '../reservations/BookingPage'
import Chicago from './chicago/Chicago'
import Homepage from './homepage/Homepage'
import "./main.css"

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<Chicago />}></Route>
        <Route path='/reservations' element={<BookingPage />}></Route>
      </Routes>
    </div>
  )
}

export default Main