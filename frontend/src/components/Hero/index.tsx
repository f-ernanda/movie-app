import './styles.css'

function Hero() {
    return (
        <header className="fs-hero">
            <nav>
                <a className="fs-logo" href="/" translate="no">Movie App</a>
            </nav>
            <div className="fs-main-title-container">
                <h1 className="fs-main-title">Rate your favourite <span className="fs-title-emphasis">movies</span></h1>
            </div>
        </header>

    )
}

export default Hero