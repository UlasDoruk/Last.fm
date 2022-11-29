import  {useContext} from "react"
import ThemeContext from "../Theme/Theme";
import "../NavBar/NavBar.css"

function NavBar() {

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <a href="HomePage.js" className="navbar-brand">
          Last.FM
        </a>
        <button
          onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")} className= {`btn btn-${theme === "Light" ? "dark" : "light"} theme`}
        ></button>
      </div>
    </nav>
  );
}

export default NavBar