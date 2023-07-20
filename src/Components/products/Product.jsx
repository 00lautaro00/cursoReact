import { useParams } from "react-router-dom"


export const Product = () => {
    const params  = useParams()
    console.log("params", params)
    return (<>
    <h1>esta es la pagina de {params.product}</h1>
    </>)
}