import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from '../layouts/PageLayout'
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import ProductListingPage from '../pages/ProductListingPage'
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/produtos" element={<ProductListingPage/>}/>
                        <Route path="/produtos/:id" element={<ProductViewPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;