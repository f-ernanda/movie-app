import Header from "@/components/Header"

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
            <section>
                <img src={movie.image} alt={movie.title}/>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"/>
                    <label htmlFor="score">Review:</label>
                    <select id="score">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type="submit">Save</button>
                    <button type="button">Cancel</button>
                </form>
            </section>
        </>
    )
}

export default Form