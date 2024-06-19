import logo from './images/ape.png';
import './App.css';
import { useEffect } from 'react';
import pic1 from './images/coolpic1.jpeg';
import pic2 from './images/coolpic2.jpeg';
import pic3 from './images/coolpic3.webp';
import first from './images/first.png';
import second from './images/sec.png';
import third from './images/thir.png';
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
      <div id='products'>
        <div className='pc-ctn'>
          <div className='product-card'>
            <img className='second' src={second}></img>
            <div className='p-i-ctn'>
              <img src={pic1}></img>
            </div>
            <div className='textbox-ctn'>
              <div className='textbox'>
              <h2 className='p-name'>TIGERR</h2>
              <p className='p-subtext'>coolstuff attracts/attacks prey</p>
              <p className='sold'>
                <p>Sold:</p>
                <p className='number-s'>170</p>
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className='pc-ctn'>
          <div className='product-card'>
            <img className='first' src={first}></img>
            <div className='p-i-ctn'>
              <img src={pic2}></img>
            </div>
            <div className='textbox-ctn'>
              <div className='textbox'>
              <h2 className='p-name'>CCAARR</h2>
              <p className='p-subtext'>can move at super speed</p>
              <p className='sold'>
                <p>Sold:</p>
                <p className='number-s'>170</p>
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className='pc-ctn'>
          <div className='product-card'>
            <img className='third' src={third}></img>
            <div className='p-i-ctn'>
              <img src={pic3}></img>
            </div>
            <div className='textbox-ctn'>
              <div className='textbox'>
              <h2 className='p-name'>SPHERE</h2>
              <p className='p-subtext'>cool, no need explanation</p>
              <p className='sold'>
                <p>Sold:</p>
                <p className='number-s'>170</p>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
