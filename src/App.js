import './App.css';
import Lander from './Components/Lander';
import HouseCateg from './Components/HouseCateg';
import Text from './Components/Text';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    if(window.scrollY === '500px') {
      console.log('scroll')
      document.querySelector('.houseCategs').style.transform = 'translateY(500px)';
    }
  })

  return (
    <div className="App">
      <Lander />
      <div className="tab1">
      <div style={{height: '500px', zIndex: '10', backgroundColor: 'white'}}></div>
      <div className="houseCategs">
        <HouseCateg img='https://www.alterego-group.com/upload/resize_cache/webp/img/mp01.webp' txt='PENTHOUSES AND APARTMENTS'/>
        <HouseCateg img='https://www.alterego-group.com/upload/resize_cache/webp/img/mp02.webp' txt='COUNTRY HOUSES AND VILLAS'/>
        <HouseCateg img='https://www.alterego-group.com/upload/resize_cache/webp/img/mp03.webp' txt='MANSIONS AND ESTATES'/>
      </div>

      <Text />
      </div>
    </div>
  );
}

export default App;
