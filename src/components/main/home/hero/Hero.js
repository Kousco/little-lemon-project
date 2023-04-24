import './hero.css'
import { Link } from 'react-router-dom'
import RestaurantFoodImage from '../../../assets/restaurantfood.jpg'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-information'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <div className='hero-button'>
          <Link to='/reservations' className='button-primary'>
            Reserve a table
          </Link>
        </div>
      </div>
      <div className='hero-image'>
        <img
          src={RestaurantFoodImage}
          alt='Restaurant food'
        />
      </div>
    </div>
  )
}

export default Hero