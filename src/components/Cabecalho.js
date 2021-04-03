import React from 'react'
import '../assets/css/componentes/cabecalho.css';
import image from '../assets/img/doguito.svg'
import {Link} from "react-router-dom"
const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone"></span>
            </div>
            <div className="cabecalho-container">
                <a href="/" className="flex flex--centro">
                    <img  className="cabecalho__logo" src={image}/>
                    <h1 className="cabecalho__titulo">Petshop</h1>
                </a>
            </div>
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><a href="#" className="menu-item menu-item--entrar">Entrar</a></li>
                    <li><a href="#" className="menu-item">Produtos</a></li>
                    <li><a href="/" className="menu-item">Blog</a></li>
                    <li><a href="/sobre" className="menu-item">Sobre</a></li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background"></div>
        </header>
    )
}

export default Cabecalho