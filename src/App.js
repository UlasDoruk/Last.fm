import './App.css';
import { Route, Routes } from "react-router-dom";
import { Theme } from "./components/Theme/Theme";
import Artist from './components/Artist/Artist';
import HomePage from './components/HomePage/HomePage';


function App() {

  return (
    <div>
      <Theme>
        <Routes>
          <Route path="/Artist" element={<Artist />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Theme>
    </div>
  );
}

export default App;
