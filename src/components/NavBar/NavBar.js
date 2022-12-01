import  {useContext} from "react"
import ThemeContext from "../Theme/Theme";
import "../NavBar/NavBar.css"

function NavBar() {

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar top">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Last.FM
        </a>
        <button id="themebtn"
          onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")} className= {`btn btn-${theme === "Light" ? "dark" : "light"} theme`}
        ></button>
      </div>
    </nav>
  );
}

export default NavBar