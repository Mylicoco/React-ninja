import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Home from "./components/home";
import WeekNews from './components/weeknews';
import MoreGift from './components/moregift';
import Sport from './components/sport';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Home/>
     {/* <WeekNews/> */}
     <MoreGift/>
     <Sport/>
  <Footer/>
    </div>
  );
}

export default App;
