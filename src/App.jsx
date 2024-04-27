

import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavbarMenu from './layouts/NavbarMenu'
import Home from './paginas/Home'
import About from './paginas/About'
import Services from './paginas/Services'
import Contact from './paginas/Contact'

function App() {


  return (
    <>
      <div className='app'>

        <BrowserRouter>

          <Routes>
            <Route path='/' element={<NavbarMenu />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />

              <Route path='*' element={<Navigate replace to="/" />} />
            </Route>
          </Routes>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App
