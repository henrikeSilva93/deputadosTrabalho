import axios from "axios"


 const getAllDeputados = async () => {
   const response = await axios.get("https://dadosabertos.camara.leg.br/api/v2/deputados")

    return response.data
 }

 const  getDeputadoByid = async (query) => {
    const response = await axios.get("https://dadosabertos.camara.leg.br/api/v2/deputados/?nome=" + query  )

    return response.data.dados
 }

 export {getAllDeputados, getDeputadoByid}