import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home'
import Footer from './Components/Footer'
import './App.css';
import Diet from './Components/Diet';
import Yoga from './Components/Yoga';
import Bmi from './Components/Bmi';


const App = () => (
  <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/diet' Component={Diet}/>
      <Route exact path='/yoga' Component={Yoga}/>
      <Route exact path='/bmi' Component={Bmi}/>
      </Routes>  
      <Footer /> 
  </BrowserRouter>     
)


export default App;
