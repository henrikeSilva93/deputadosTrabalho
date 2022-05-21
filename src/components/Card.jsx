
import { Link } from "react-router-dom"
import "../css/card.css"

export default function Card({img, nome, partido}){
    return (
        <div>
            <Link to="#" className="card-link">
           <div className="card">
           <div>
                <img src={img} alt=""  className="card-img"/>
            </div>
            <div className="card-title">
                <h4>{nome}</h4>
                <h5>{partido}</h5>
                </div>
           </div>
           </Link>
        </div>
        
    )
}