import React from 'react'
import CurrentMovieList from './CurrentMovieList'
import Header from './Header'


import "../Styles/styles.css";

export default function GLXHome() {
  
  return (
    <div className="container">
      <Header/>
      <CurrentMovieList/>
    </div>
  )
}
