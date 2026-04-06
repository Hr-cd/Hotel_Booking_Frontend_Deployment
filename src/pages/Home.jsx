import React from 'react'
import Banner from '../components/Banner'
import DreamVacation from '../components/DreamVacation'
import NextTrip from '../components/NextTrip'
import Hotel from '../components/Hotel'

const Home = () => {
  return (
    <div>
        <Banner/>
        <DreamVacation/>
        <NextTrip/>
        <Hotel/>
    </div>
  )
}

export default Home