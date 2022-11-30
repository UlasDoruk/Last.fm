import { useContext, useEffect, useState } from "react";
import {NavLink} from "react-router-dom"
import ArtistContext from "../../Context/ArtistContext";
import "../Cards/Cards.css";

function Cards() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { showArtist } = useContext(ArtistContext);
  const [loading,setLoading] = useState(true)
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=537ca37ec8bb9458ec681e602244c5fe&format=json`;

  

  const loadData = async () => {
    let response = await fetch(`${url}&page=${page}`);
    if(!response.ok){
      throw Error("Could not fetch the data for that resource ")
    }
    let data = await response.json();
    setData((prev) => [...prev, ...data.artists.artist]);
    setLoading(false);
    }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight
    ) {
      setLoading(true)
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    loadData().catch(err=>{
      console.log(err.message)
    });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

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
