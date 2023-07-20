import { Link } from "react-router-dom"


export const Products = () => {
    const product = [
        {   
            id:0,
            name:"tv",
            price:"200"
        },
        {   
            id:2,
            name:"cell",
            price:"200"
        }, 
        {   
            id:3,
            name:"moto",
            price:"200"
        },
    ]
    
    return (
        <>
        <h1>Aca van los products</h1>
       {
        product.map((pro,i) => (
            
            <div key={pro.id}>
                <span >{pro.name}</span>
                <span >{pro.price}</span>
                <Link to={pro.name}>ir</Link>
            </div>
        ))
       }
        </>
    )
}