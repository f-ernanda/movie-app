import Header from "@/components/Header"

import './styles.css'

function Form() {

    const movie = {
        id: 1,
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
        title: 'Star Wars: The Rise of Skywalker',
        count: 2,
        score: 4.5
    }

    return (
        <>
            <Header/>
            <section className="fs-form">
                <img className="fs-form-img" src={movie.image} alt={movie.title}/>
                <form>
                    <label className="fs-form-label" htmlFor="email">Email:</label>
                    <input className="fs-form-input" type="email" id="email" required/>
                    <label className="fs-form-label" htmlFor="score">Review:</label>
                    <select className="fs-form-input fs-form-select" id="score">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="fs-button-container">
                        <button className="fs-button" type="submit">Save</button>
                        <button className="fs-button fs-button-secondary" type="button">Cancel</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form