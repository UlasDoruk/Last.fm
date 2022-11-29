import React from 'react'
import NavBar from "../NavBar/NavBar"
import Footer from  "../Footer/Footer"
import Cards from "../Cards/Cards"

function HomePage() {
  return (
    <div>
      <NavBar />
      <Cards/>
      <Footer />
    </div>
  );
}

export default HomePage