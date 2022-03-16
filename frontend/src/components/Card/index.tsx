import ReviewInfo from '@/components/ReviewInfo'
import './styles.css'

function Card() {
    const movie = {
        id: 1,
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
        title: 'Star Wars: The Rise of Skywalker',
        count: 2,
        score: 4.5
    }

    return (
        <>
            <article className='fs-card'>
                <div className='fs-image-container'>
                    <img className='fs-card-image' src={movie.image} alt={movie.title} />
                    <ReviewInfo />
                </div>
                <p className='fs-movie-title'>{movie.title}</p>
                <button className='fs-button button-card' type='button'>
                    Review
                </button>
            </article>
        </>
    )
}

export default Card
