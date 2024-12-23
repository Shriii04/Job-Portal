import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './ViewAllJobs'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero ></Hero>
      <HomeCards></HomeCards>
      <JobListings></JobListings>
      <ViewAllJobs></ViewAllJobs>
    
    </div>
  )
}

export default App
