import React from 'react'
import Hero from '../Component/Hero'
import Product from '../Component/Product'
import { Shoelist } from '../Helper/Shoelist'
import About from '../Component/About'
import Review from '../Component/Review'
import { Reviewlist } from '../Helper/Reviewlist'
import Services from '../Component/Services'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'

const Home = () => {
  return (
   <>
   <Hero/>
   <Product Shoelist={Shoelist}/>
    <About/>
    <Review Reviewlist={Reviewlist}/>
    <Services/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default Home