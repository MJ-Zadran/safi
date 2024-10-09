import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import products from "../infopage/products";
import Card from "../infopage/Card";

function Detail(props){
    const location = useLocation();
    const {from} = location.state;
   
    


    return <div>
        <Header></Header>
        <div className="info-container" id="content">
            {products[from].map((item, index) =>{
                return (<Card
                    key={index}
                    id={index}
                    img={item.imgUrl}
                    title={item.title}
                    content={item.discription}
                />)
            })}
            
    </div>
        <Footer></Footer>
    </div>
}

export default Detail;