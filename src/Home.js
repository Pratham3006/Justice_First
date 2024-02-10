import React from 'react'
import Navbar from './components/Navbar'
import logo from '../src/components/assets/logo.png'
import './Home.css'
import Caraousel from './components/Caraousel'
import Loginasset from './Loginasset'
import Footer from './components/Footer'
import { useState,useEffect } from 'react'
import Loader from './Loader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
    return () => clearTimeout(timeout);
  }, []); 
  return (
    <div className='Home'>
    {isLoading ? (
      <Loader /> // Show loader if isLoading is true
    ) : (
      <>
        {/* Render content when isLoading is false */}
        <Navbar image={logo} item1={"PIL'S"} item2={"About us"} item3={"Faq's"} item4={"Statistics"} item5={"Release notes"} />
        <Caraousel />
        <Loginasset />
        <Footer />
      </>
    )}
  </div>
  )
}
