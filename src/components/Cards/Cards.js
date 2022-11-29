import { useEffect, useState } from "react";
import {NavLink} from "react-router-dom"
import "../Cards/Cards.css";
import Artist from "../Artist/Artist";

function Cards() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading,setLoading] = useState(true)
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=537ca37ec8bb9458ec681e602244c5fe&format=json`;

  const loadData = async () => {
    let response = await fetch(`${url}&page=${page}`);
    let data = await response.json();
    setData((prev) => [...prev, ...data.artists.artist]);
    setLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight
    ) {
      setLoading(true)
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    loadData();
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
                        <NavLink to="/Artist" style={{color:"inherit",textDecoration:"none"}}>
                        <img src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"></img>
                        <h5 className="card-title">{item.name}</h5>
                        </NavLink>
                    </div>
                    <div className="artistText">
                      <p className="card-text">
                        listeners : {item.listeners}
                        <br></br>
                        playcount : {item.playcount}
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
