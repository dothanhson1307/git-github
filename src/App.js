import logo from './images/ape.png';
import './App.css';
import { useEffect,useState} from 'react';
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
    function findbest(products){
      var highest = 0;
      var name = '';
      for(let i=0;i<products.length;i++){
        if(products[i].sold > highest){
          highest = products[i].sold;
          name = products[i].name
        }
      }
      setFirstplc(name);
      for(let i=0;i<products.length;i++){
        if(products[i].name == name){
          products.splice(i,1)
        }
      }
      highest = 0;
      for(let i=0;i<products.length;i++){
        if(products[i].sold > highest){
          highest = products[i].sold;
          name = products[i].name
        }
      }
      setSecondplc(name);
      console.log('sec',name);
      for(let i=0;i<products.length;i++){
        if(products[i].name == name){
          products.splice(i,1)
        }
      }
      highest = 0;
      for(let i=0;i<products.length;i++){
        if(products[i].sold > highest){
          highest = products[i].sold;
          name = products[i].name
        }
      }
      setThirdplc(name);

    }
    findbest(products);
  },[])
  const products = [
    {name:'tigerr',sold:170,rate:-25},
    {name:'ccaarr',sold:250,rate:50},
    {name:'sphere',sold:120,rate:70},
    {name:'window',sold:270,rate:-50},
    {name:'tablet',sold:5,rate:200},
    {name:'seizure',sold:130,rate:30},
  ];
  const [firstplc,setFirstplc] = useState('');
  const [secondplc,setSecondplc] = useState('');
  const [thirdplc,setThirdplc] = useState('');
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
              <h2 className='p-name'>{secondplc}</h2>
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
              <h2 className='p-name'>{firstplc}</h2>
              <p className='p-subtext'>can move at super speed</p>
              <p className='sold'>
                <p>Sold:</p>
                <p className='number-s'>250</p>
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
              <h2 className='p-name'>{thirdplc}</h2>
              <p className='p-subtext'>cool, no need explanation</p>
              <p className='sold'>
                <p>Sold:</p>
                <p className='number-s'>120</p>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='products-list'>

      </div>
    </div>
  );
}

export default App;
