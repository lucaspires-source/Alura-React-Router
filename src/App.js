import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Pagina404 from './paginas/Pagina404';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route path="" component={Pagina404}/>
      </Switch>
    </BrowserRouter>

  )
}

export default App
