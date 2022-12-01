import  React,{useContext} from "react"
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
        {/* Sayfada ki butona tıkladığında tema ve className'i değiştiren bir onClick fonksiyonu buluyor. */}
        {/* Burada ki className'in değişmesinin sebebi butonun arka planının da eş zamanlı değişmesi için. */}
        <button id="themebtn"
          onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")} className= {`btn btn-${theme === "Light" ? "dark" : "light"} theme`}
        ></button>
      </div>
    </nav>
  );
}
// React.memo gereksiz render işleminin önüne geçmiş oluyoruz.
export default React.memo(NavBar)