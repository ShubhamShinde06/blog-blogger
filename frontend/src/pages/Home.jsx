import React, { useContext } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import MixBox from '../components/MixBox'
import EntertainmentCom from '../components/EntertainmentCom'
import LifeCom from '../components/Lifecopy'
import PoliticsCom from '../components/PoliticsCom'
import TechCom from '../components/TechCom'
import Footer from '../components/Footer'
const Home = () => {


  return (
    <div className='w-full'>
      <Header/>
      <Main/>
      <MixBox/>
      <EntertainmentCom/>
      <LifeCom/>
      <PoliticsCom/>
      <TechCom/>
      <Footer/>
    </div>
  )
}

export default Home