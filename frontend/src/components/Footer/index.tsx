import './styles.css'

function Footer() {
    return (
        <footer className="fs-footer">
            <hr/>
            <a className="fs-logo" href="/" translate="no">Movie App</a>
            <div className="fs-contact-container">
                <a href="https://www.linkedin.com/in/f-ernanda/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <i className="fs-icon linkedin" aria-hidden="true"/>
                </a>
                <a href="https://f-ernanda.hashnode.dev/" target="_blank" rel="noreferrer" aria-label="Hashnode Blog">
                    <i className="fs-icon hashnode" aria-hidden="true"/>
                </a>
                <a href="https://github.com/f-ernanda" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <i className="fs-icon github" aria-hidden="true"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer