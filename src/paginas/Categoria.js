import React,{useState,useEffect} from "react";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import { busca } from "../api/api";
const Categoria = () => {
  const { id } = useParams();
  const { path } = useRouteMatch();
  const [subcategorias,setSubCategorias] = useState([])  
    useEffect(()=>{
        busca(`/categorias/${id}`,(categoria) =>{
            setSubCategorias(categoria.subcategorias)
        })
    },[id])
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        <li
          className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
          key={subcategoria}
        ></li>
      </ul>
      <Route exact path={`${path}/`}>
        <ListaPost url={`/posts?categoria=${id}`} />
      </Route>
    </>
  );
};

export default Categoria;
