import logo from './images/ape.png';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
  function makeTextCool(id){
      var element = document.getElementById(id);
      if(element){
        var text = element.innerText.split("");
        element.innerText = "";
        text.forEach((letter) => {
          var span = document.createElement('span');
          span.innerText = letter;
          span.classList.add('letter');
          element.appendChild(span);
        })
      }
    }
    makeTextCool('title');
    }
  )
  
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
      <div id='title' className='fancy' >BasicWeb</div>
      {/* <div id='products'>
        <div className='product-card'>
          <div className='p-i-ctn'>
            <img></img>
          </div>
          <h2 className='p-name'></h2>
          <p className='p-subtext'></p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
