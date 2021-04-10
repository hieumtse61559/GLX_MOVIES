import React from 'react'
import CurrentMovieList from './CurrentMovieList'
import Header from './Header'
import Navbar from './Navbar';



import "../Styles/styles.css";

export default function GLXHome() {
  
  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <CurrentMovieList/>
    </div>
  )
}
