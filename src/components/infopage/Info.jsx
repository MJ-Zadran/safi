import products from "./products";
import Card from "./Card";
import "./info.css";


function Info(){ 

    return <div className="info-container" id="content">
            {products.map((item, index) =>{
                return (<Card
                    key={index}
                    id={index}
                    img={item[0].imgUrl}
                    title={item[0].title}
                    content={item[0].discription}
                />)
            })}
            
    </div>
}

export default Info;