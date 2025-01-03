// eslint-disable-next-line no-unused-vars
import React from 'react'
import SearchBox from '../components/Searchbox'
import PropertyCard from '../components/PropertyCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <div className="bg-[rgb(0,128,128)] bg-opacity-[0.55] pt-7 h-[200px]">
        <SearchBox/>
        <h2 className='text-blue-950 text-xl mx-12'>Newly Available properties:</h2>
        <PropertyCard/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home