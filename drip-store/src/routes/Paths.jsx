import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from '../layouts/PageLayout'
import Home from "../pages/Home";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/produtos" element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;