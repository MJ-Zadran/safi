import { Link, useLocation } from "react-router-dom";
import Btn from "../Btn";


function Card(props){

    const location = useLocation();
    const id = props.id;

    const shouldShowLink = location.pathname !== "/details";
    

    return <div className="card">
            <img src={props.img}  alt={props.title} />
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                {  shouldShowLink && (<p>
                <Link to="/details"  state={{from: id}}>
                    نور ډیزاینونه 
                </Link></p>)
                }
                <Btn></Btn> 
            </div>
    </div>
}

export default Card;