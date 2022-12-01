import { useContext, useEffect, useState } from "react";
import {NavLink} from "react-router-dom"
import ArtistContext from "../../Context/ArtistContext";
import "../Cards/Cards.css";

function Cards() {
  // Apı'dan çekeceğiniz verileri data  değişkeninde saklıyoruz.
  const [data, setData] = useState([]);
  // Sayfada infinite scroll kullanıldğından yüklenirken loading kısmı burada saklanıyor.
  const [loading, setLoading] = useState(true);
  // Infinite scroll için initial değeri burada 1 olarak geçiyoruz. Kullanıcı scroll yapmaya başladıkça page değeri teker teker artacak.
  const [page, setPage] = useState(1);
  // Ünlüleri kendi sayfalarını göstermek için ArtistContext'de ki showArtist methodunu burada geçiyoruz.
  const { showArtist } = useContext(ArtistContext);
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=537ca37ec8bb9458ec681e602244c5fe&format=json`;

  
  // Apı'dan gelen verileri fetch ile çekiyoruz ve json formatında data değişkenimize atıyoruz.
  const loadData = async () => {
    let response = await fetch(`${url}&page=${page}`);
    // Eğer veri çekme kısmında bir problem yaşanırsa loading değişkenini false olarak değiştiriyoruz. 
    if(!response.ok){
      throw Error("Could not fetch the data for that resource ")
    }
    let data = await response.json();
    // Kullanıcı infinite scroll yaparken diğer verilerin ve şu anki verilerin tutulmasını sağlıyoruz. 
    setData((prev) => [...prev, ...data.artists.artist]);
    setLoading(false);
    }
    // Infinite scroll sırasında sayfanın boyutu artacağında ötürü page değişkenini uyararak bir arttırıyoruz.
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight
    ) {
      setLoading(true)
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // Veri çekme kısmında herhangi bir problem yaşanırsa burada hatayı yakalıyoruz.
    loadData().catch(err=>{
      console.log(err.message)
    });
    window.addEventListener("scroll", handleScroll);
  }, [page]);
  // Burada klasik map yöntemi ile Apı'dan gelen verileri JSX içinde manüpüle ediyoruz. 
  return (
    <div>
      <p className="topArtistList">Top Artits List</p>
      {data.map((item, index) => {
        return (
          <div className="container" key={index}>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="imgTitle">
                      {/* Burada ünlülerin kendis sayfalarına yönlendirme işlemi yapıyoruz. */}
                      <NavLink
                        to="/Artist"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        <img className="mainimg"
                          src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
                          onClick={() => showArtist(item.name)}
                        ></img>
                        <h5
                          onClick={() => showArtist(item.name)}
                          className="card-title"
                        >
                          {item.name}
                        </h5>
                      </NavLink>
                    </div>
                    <div className="artistText">
                      <p className="card-text">
                        Listeners : {item.listeners}
                        <br></br>
                        Playcount : {item.playcount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <h1 className="loading">{loading ? "..." : ""}</h1>
    </div>
  );
}

export default Cards;
