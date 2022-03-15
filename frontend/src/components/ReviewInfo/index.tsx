import ReviewStars from '../ReviewStars'
import './styles.css'

function ReviewInfo() {
    const rating = 3.8
    const count = 13

    return (
        <section className='fs-review-info'>
            <div className='fs-review-info-container'>
                <p className='fs-review-count'>{count} reviews</p>
                <ReviewStars />
            </div>
            <p className='fs-rating-value' aria-label='Rating value'>
                {rating > 0 ? rating.toFixed(1) : '-'}
            </p>
        </section>
    )
}

export default ReviewInfo
