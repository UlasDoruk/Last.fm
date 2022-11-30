import './App.css';
import { Route, Routes } from "react-router-dom";
import { Theme } from "./components/Theme/Theme";
import Artist from './components/Artist/Artist';
import HomePage from './components/HomePage/HomePage';
import {ShowArtist} from "./Context/ArtistContext"


function App() {

  return (
    <div>
      <ShowArtist>
        <Theme>
          <Routes>
            <Route path="/Artist" element={<Artist />}></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </Theme>
      </ShowArtist>
    </div>
  );
}

export default App;
