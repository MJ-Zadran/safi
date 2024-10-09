

function Footer(){
    
        const phoneNumber = "93785007849";
        const message = "Hello, I am interested in your product!";
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`


    return <header className="footer" >
                
                <p> &copy; Safi </p>
                <a href={whatsappLink}> <li className="fa-brands fa-whatsapp"></li> </a>
                <a href="https://www.facebook.com/profile.php?id=100093048992365&mibextid=ZbWKwL"> <li className="fa-brands fa-facebook"></li> </a>
                <a href="https://snapchat.com/t/tSScrSa4"> <li className="fa-brands fa-snapchat"></li> </a>
            </header>
}

export default Footer;