import './reviewCard.css'
import { faStarHalfAlt, faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ratingLevel = {
    '0.5': faStarHalfAlt,
    '1': faStar,
}

const ReviewCard = ({userReview}) => {
  return (
    <div className="review-card-container">
        <div className='user-header'>
            <img src={userReview.photo} />
            <h3>{userReview.name}</h3>
        </div>
        <div className='user-rating'>
            <span>
                {userReview.rating.map((ratingPoint, index) =>
                <FontAwesomeIcon
                    key={index}
                    icon={ratingLevel[ratingPoint]}
                    size="s"
                />
                )}
            </span>
        </div>
        <div className='user-review'>
            <p>{userReview.review}</p>
        </div>
    </div>
  )
}

export default ReviewCard