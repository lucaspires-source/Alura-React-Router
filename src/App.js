import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import {BrowserRouter,Route,Link} from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/sobre" component={Sobre}/>
    </BrowserRouter>
  
  )
}

export default App
