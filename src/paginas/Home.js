import React from 'react'
import ListaPost from '../components/ListaPost'
import Categoria from './Categoria'

const Home = () => {

  return (
    <main>
      <Categoria/>
      <ListaPost url={'/posts'}/>
      
    </main>
  )
}

export default Home
