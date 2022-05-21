import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "../css/home.css"
import { getAllDeputados, getDeputadoByid } from "../service/deputados";

export default function Home(){
    const [deputados, setDeputados] = useState([])
    const [query, setQuery] = useState("")

console.log(deputados)
    useEffect(()=>{
       getAllDeputados().then(response => setDeputados(response.dados))
    },[])

    const buscarDeputado = async () => {
        getDeputadoByid(query).then(response => setDeputados(response))
    }



    return (
       <>
            <Navbar/>
           <div className="div-fundo">
            <div className="cover">
                <h1>O que os deputados estão fazendo com o nosso dinheiro?</h1>
            </div>
           </div>
           <div className="input-search">
           <i class="fa fa-search fa-2x" aria-hidden="true"></i>
               <input type="text" placeholder="buscar deputado" onChange={(e) => setQuery(e.target.value)}/>
               <button onClick={buscarDeputado}>Buscar</button>
           </div>
            <div className="container">

             {
                deputados && deputados.map(item =>(
                    <Card 
                    key={item.cod}
                    img={item.urlFoto}
                    nome={item.nome}
                    partido={item.siglaPartido}
                    />
                 ))
             }
           
                
            </div>
         </>
    )
      
}