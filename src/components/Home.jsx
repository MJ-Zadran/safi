import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./Footer";
import Header from "./Header";
import Main from './home/Main';
import Info from "./infopage/Info";



function Home(){
    return <div>
            <Header></Header>
            <Main></Main>
            <Info></Info>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
    </div>
}

export default Home;