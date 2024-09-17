import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Items,Category, Memo} from "../pages";
import { Navbar } from "../components";

export const MainRouter = () => { 
    return ( 
 <BrowserRouter>
 <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Items/:id" element={<Items/>}/>
        <Route path="/products/category/:id" element={<Category/>} />
        <Route path="/memo" element={<Memo/>}/>
    </Routes>
 </BrowserRouter>
    );
}