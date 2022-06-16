import logo from './logo.svg';
import './App.css';
import Lander from './Components/Lander';
import HouseCateg from './Components/HouseCateg';
import Text from './Components/Text';

function App() {
  return (
    <div className="App">
      <Lander />
      <div className="houseCategs">
        <HouseCateg img='https://www.alterego-group.com/upload/resize_cache/webp/img/mp01.webp' txt='PENTHOUSES AND APARTMENTS'/>
        <HouseCateg img='https://www.alterego-group.com/upload/resize_cache/webp/img/mp02.webp' txt='COUNTRY HOUSES AND VILLAS'/>
        <HouseCateg img='https://www.alterego-group.com/upload/resize_cache/webp/img/mp03.webp' txt='MANSIONS AND ESTATES'/>
      </div>
      <Text />
    </div>
  );
}

export default App;
