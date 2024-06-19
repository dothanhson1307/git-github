import logo from './images/ape.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='navbar-ctn'>
        <img id='logo' src={logo}></img>
        <ul id='nav-bar'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#products'>Products</a></li>
          <li><a href='contact'>About</a></li>
        </ul>
        <a className='cta' href='#'><button>Contact</button></a>
      </div>
    </div>
  );
}

export default App;
