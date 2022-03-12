import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from '@/pages/Form'
import Home from '@/pages/Home'

import Header from '@/components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form">
            <Route path=":movieId" element={<Form/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
