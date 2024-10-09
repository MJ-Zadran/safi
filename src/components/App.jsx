import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./detail/Detail";
import ScrollToTop from "./ScrolToTop";



function App(){  
    

    return <Router>
            <ScrollToTop  />
            <Routes>
                <Route path="/"  element={<Home  />}  />
                <Route path="/details"  element={<Detail  />}  />
            </Routes>
    </Router>
}

export default App;