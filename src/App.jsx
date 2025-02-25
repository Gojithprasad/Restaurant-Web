import React from 'react'
import Header from './components/Header/Header'
import Welcome from './pages/Welcome/Welcome'
import Footer from './components/Footer/Footer'
import Parnter from './pages/Parnter/Parnter'
import Booking from './pages/Booking/Booking'
import Dishes from './pages/Dishes/Dishes'

function App() {
  return (
   <>
   <Header/>
   <Welcome/>
   <Parnter/>
   <Booking/>
   <Dishes/>
   <Footer/>
   </>
  )
}

export default App
