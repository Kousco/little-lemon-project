import './specialsCard.css'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const SpecialsCard = ({meal}) => {
  return (
    <div className="meal-container">
      <div className="meal-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-header">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="meal-footer">
        <p>{meal.description}</p>
      </div>
      <div className='meal-delivery'>
          <Link to="/order-online" className="online-order">
            Order delivery...
          </Link>
          <FontAwesomeIcon icon={faCarSide} size="1x" />
        </div>
    </div>
  )
}

export default SpecialsCard