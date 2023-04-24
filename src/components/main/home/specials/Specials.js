import "./specials.css"
import { Link } from 'react-router-dom'
import greekSaladImage from '../../../assets/greekSalad.jpg'
import bruschettaImage from '../../../assets/bruschetta.png'
import lemonDessertImage from '../../../assets/lemonDessert.jpg'
import SpecialsCard from "./SpecialsCard"

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
]

const Specials = () => {
  return (
    <div className='specials-container'>
      <div className='specials-title'>
        <h2>This weeks specials!</h2>
        <Link to='/menu' className='button-primary'>
          Online Menu
        </Link>
      </div>
      <div className="specials-cards">
        {meals.map((meal, index) =>
          <SpecialsCard key={index} meal={meal} />
        )}
      </div>
    </div>
  )
}

export default Specials