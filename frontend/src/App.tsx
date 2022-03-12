import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from '@/pages/Form'
import Home from '@/pages/Home'

import Footer from '@/components/Footer'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form">
            <Route path=":movieId" element={<Form/>} />
          </Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
