import './styles.css'

function Header() {
    return (
        <header className="fs-header">
            <a className="fs-logo" href="/" translate="no">Movie App</a>
            <div className='fs-container'>
                <h1 className="fs-title">Rate your favourite <span className="fs-emphasis">movies</span></h1>
            </div>
        </header>
    )
}

export default Header