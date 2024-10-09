
function Btn(props){
    const phoneNumber = "93785007849";
    const message = "Hello, I am interested in your product!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return  <a href={whatsappLink}>

    <button className="btn" onClick={props.onSubmit} >{props.text ? props.text : "واټساپ" }</button>
    </a>
        
    
}

export default Btn;