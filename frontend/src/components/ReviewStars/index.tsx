import './styles.css'

import starFull from '@/assets/icons/star-full.svg'
import starHalf from '@/assets/icons/star-half.svg'
import starEmpty from '@/assets/icons/star-empty.svg'

function ReviewStars() {
    return (
        <div className='fs-review-stars'>
            <img className='fs-star' src={starFull} alt='' />
            <img className='fs-star' src={starFull} alt='' />
            <img className='fs-star' src={starFull} alt='' />
            <img className='fs-star' src={starHalf} alt='' />
            <img className='fs-star' src={starEmpty} alt='' />
        </div>
    )
}

export default ReviewStars
