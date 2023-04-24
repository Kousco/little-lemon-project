import ReviewCard from "./ReviewCard"
import "./reviews.css"
import userPhoto from '../../../assets/profile-picture.png'

const Testimonials = () => {

  const userReviews = [
    {
      name: 'Giorgos',
      photo: userPhoto,
      rating: [1, 1, 1, 1, 0.5],
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: 'Nikos',
      photo: userPhoto,
      rating: [1, 1, 1, 1, 1],
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: 'Eleni',
      photo: userPhoto,
      rating: [1, 1, 1, 0.5],
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: 'Mihali',
      photo: userPhoto,
      rating: [1, 1, 1, 1],
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ]

  return (
    <div className="reviews-container">
      <div className="review-title">
        <h2>Customer Reviews</h2>
      </div>
      <div className="review-cards">
        {userReviews.map((userReview, index) =>
         <ReviewCard key={index} userReview={userReview} />
        )}
      </div>
    </div>
  )
}

export default Testimonials