import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';


const App = () =>{
return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Product/>}/>
  
  </Routes>
  </BrowserRouter>
  </>
)
}

export default App;