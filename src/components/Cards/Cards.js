import { useEffect, useState } from "react";
import "../Cards/Cards.css";
import Artist from "../Artist/Artist";

function Cards() {
  const [data, setData] = useState([]);
  const url =
    "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=537ca37ec8bb9458ec681e602244c5fe&format=json";

  const loadData = async () => {
    let response = await fetch(`${url}`);
    let data = await response.json();
    setData(data.artists.artist);
  };

  useEffect(() => {
    loadData();
  }, []);

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
                      <a>
                        <img
                          onClick={() => {
                            <Artist />;
                          }}
                          src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
                        ></img>
                        <h5 className="card-title">{item.name}</h5>
                      </a>
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
    </div>
  );
}

export default Cards;
