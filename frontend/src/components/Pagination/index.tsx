import './styles.css'

function Pagination() {
    return (
        <section className='fs-pagination'>
            <button className='fs-page-button' type='button' aria-label='Previous page' disabled>
                <i className='fs-arrow left' aria-hidden='true' />
            </button>
            <p>1 of 3</p>
            <button className='fs-page-button' type='button' aria-label='Next page'>
                <i className='fs-arrow right' aria-hidden='true' />
            </button>
        </section>
    )
}

export default Pagination
