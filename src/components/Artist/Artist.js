import "../Artist/Artist.css";
import { NavLink } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import ArtistContext from "../../Context/ArtistContext";
import ThemeContext from "../Theme/Theme";

function Artist() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const {artistName} = useContext(ArtistContext)
  const {theme,setTheme} = useContext(ThemeContext)
  const topAlbumURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=537ca37ec8bb9458ec681e602244c5fe&format=json`;
  const topTracksURL =`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=537ca37ec8bb9458ec681e602244c5fe&format=json`;

  const loadTopAlbum = async () => {
    let response = await fetch(topAlbumURL);
    let topAlbum = await response.json();
    setTopAlbum(topAlbum.topalbums.album.slice(0,10));
  };

  const loadTopTracks = async () => {
    let response = await fetch(topTracksURL);
    let topTracks = await response.json();
    setTopTracks(topTracks.toptracks.track.slice(0, 10));
  };

  useEffect(() => {
    loadTopAlbum();
    loadTopTracks();
  }, []);

  const renderTopTracks=()=>{
    return(
        <React.Fragment>
            {topTracks.map((item,index)=>{
                return (
                  <div className="row" key={index}>
                    <div className="col-10 topTracks">
                      <div className="card topTracks">
                        <img
                          className="card-img-topTracks"
                          src="https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png"
                          alt="Card image cap"
                        ></img>
                        <div className="card-body topTracks">
                          <h5 className="card-title">{item.name}</h5>
                          <div className="trackstext">
                            <p className="trackslisteners">Listeners : {item.listeners}</p>
                            <p className="tracksplay">Play : {item.playcount}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
        </React.Fragment>
    )
  }

  const renderTopAlbums = () => {
    return (
      <React.Fragment>
        {topAlbum.map((item, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-10 topAlbums">
                <div className="card topAlbums">
                    <img
                      className="card-img-topAlbums"
                      src="https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png"
                      alt="Card image cap"
                    ></img>
                    <div className="card-body topAlbums">
                      <h5 className="card-title">{item.name}</h5>
                      <div className="textAlbums">
                        <p>Play : {item.playcount}</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <>
      <div className="container top">
        <NavLink
          className="btnhome"
          to={"/"}
          style={{ textDecoration: "none" }}
        >
          <button className="btnHome">HOME</button>
        </NavLink>
        <div className="card Top">
          <img
            className="card-img-top"
            src="https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png"
            alt="Card image cap"
          ></img>
          <div className="card-body Title">
            <h1 className="card-title">{artistName}</h1>
          </div>
        </div>
      </div>
      <hr></hr>
      <button
        onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}
        className={`btn btn-${theme === "Light" ? "dark" : "light"} theme`}
      ></button>
      <div className="container body">
        <div className="row">
          <div className="col-5 topAlbums">
            <h1 className="albumsTitle">Top Albums</h1>
            {renderTopAlbums()}
          </div>
          <div className="col-5 topTracks">
            <h1 className="tracksTitle">Top Tracks</h1>
            {renderTopTracks()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Artist;
