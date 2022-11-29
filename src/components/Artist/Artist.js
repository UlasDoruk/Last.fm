import "../Artist/Artist.css";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Artist() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const topAlbumURL =
    "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Drake&api_key=537ca37ec8bb9458ec681e602244c5fe&format=json";
  const topTracksURL =
    "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Drake&api_key=537ca37ec8bb9458ec681e602244c5fe&format=json";

  const loadTopAlbum = async () => {
    let response = await fetch(topAlbumURL);
    let topAlbum = await response.json();
    setTopAlbum(topAlbum.topalbums.album);
  };

  const loadTopTracks = async () => {
    let response = await fetch(topTracksURL);
    let topTracks = await response.json();
    setTopTracks(topTracks.toptracks.track);
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
                    <div className="col-10 topAlbums">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src="..."
                          alt="Card image cap"
                        ></img>
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p>{item.listeners}</p>
                          <p>{item.playcount}</p>
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
                <div className="card">
                  <img
                    className="card-img-top"
                    src="..."
                    alt="Card image cap"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p>{item.playcount}</p>
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
      <NavLink to={"/"}>
        <button className="btnHome">HOME</button>
      </NavLink>
      <div className="container">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Name</h5>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-5 topTracks">
            <h1>Top Albums</h1>
            {renderTopAlbums()}
          </div>
          <div className="col-5 topTracks">
            <h1>Top Tracks</h1>
            {renderTopTracks()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Artist;
