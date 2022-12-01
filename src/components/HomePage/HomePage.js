import React from 'react'
import NavBar from "../NavBar/NavBar"
import Footer from  "../Footer/Footer"
import Cards from "../Cards/Cards"

 //Kod karmaşasında kaçınmak için ana sayfada gösterilecek componentleri burada topluyoruz.
function HomePage() {
  return (
    <div>
      <NavBar />
      <Cards />
      <Footer />
    </div>
  );
}

export default HomePage