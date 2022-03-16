import Card from '@/components/Card'
import Hero from '@/components/Hero'
import Pagination from '@/components/Pagination'

import './styles.css'

function Home() {
    return (
        <>
            <Hero />
            <section className='fs-cards-section'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
            <Pagination />
        </>
    )
}

export default Home
