import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "../css/home.css"
import { getAllDeputados, getDeputadoByid } from "../service/deputados";

export default function Home(){
    const [deputados, setDeputados] = useState([])
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [perPage] = useState(10)


    let lastIndex = page * perPage
    let firstIndex = lastIndex - perPage
    const totalPages = Math.ceil(deputados.length / perPage)

    const paginado = deputados.slice(firstIndex, lastIndex)

    useEffect(()=>{
       getAllDeputados().then(response => setDeputados(response.dados))
    },[])

    const buscarDeputado = async () => {
        getDeputadoByid(query).then(response => setDeputados(response))
    }

    const nextPage = ()=> {
       if(page >= totalPages) {
           return null
       } 

       setPage(page + 1)
       
    }

    const prevPage = ()=> {
        if(page <= 1) {
            return null
        } 
 
        setPage(page - 1)
        
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
                 paginado.map(item =>(
                    <Card 
                    key={item.cod}
                    img={item.urlFoto}
                    nome={item.nome}
                    partido={item.siglaPartido}
                    />
                 ))
             }

             <div>
             <button onClick={prevPage} >Próxima</button>
             {page} / 
             {totalPages}
             <button onClick={nextPage}>Próxima</button>
             </div>
           
                
            </div>
         </>
    )
      
}