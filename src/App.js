import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Homepage from './components/Homepage/Homepage'
import Coins from './components/Coins/Coins'
import Header from './components/Header/Header'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import CoinDetails from './components/CoinDetails/CoinDetails'

const App = () => {
  return (
    <div>
      {/* <h1>Crypto Cafe Starter Template</h1> */}
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/coins' element={<Coins />}></Route>
        <Route path='/coindetail/:id' element={<CoinDetails />}></Route>

        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
