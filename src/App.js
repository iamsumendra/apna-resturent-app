

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Header from "./Header"
import Maincomponent from './Maincomponent';
import Plans from './Plans'
import Serve from './Serve';

import Allresturent from './Allresturent';
import Work from './Work';

import  Suggest  from "./Suggest"
import Choice from './Choice';
import Purchase from './Purchase';
import Owner from './Owner';
 import Store from './Store';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
          {/* <Route path='/path' element={<Plans/>}/> */}
          {/* <Route path='/resturent' element={<Allresturent/>}/> */}
          {/* <Route path='/shope' element={<Shope/>}/> */}
      </Routes>
      </BrowserRouter> 
      
       
       <Maincomponent/>
      <Plans/>  
      <Serve/>
      <Allresturent/> 
      <Work/>
      < Suggest />
      <Choice/>
      <Purchase/> 
      <Owner/> 
      <Store/> 
      <Footer/>
     
    </div> 
  );
}

export default App;
