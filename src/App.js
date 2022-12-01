import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Theme } from "./components/Theme/Theme";
import { ShowArtist } from "./Context/ArtistContext";
import Artist from './components/Artist/Artist';
import ErrorPage from './components/ErrorPage/ErrorPage';

const HomePage = React.lazy(() => import("./components/HomePage/HomePage"));

function App() {

  return (
    <div>
      <ShowArtist>
        <Theme>
          <Routes>
            <Route path="/Artist" element={<Artist />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </Theme>
      </ShowArtist>
    </div>
  );
}

export default App;
