import './App.css';
import HomePage from './components/HomePage/HomePage';
import {Theme} from "./components/Theme/Theme"


function App() {

  return (
    <div className='Light'>
      <Theme>
        <HomePage />
      </Theme>
    </div>
  );
}

export default App;
