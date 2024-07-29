import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Div = styled.div`
    background-color: #F9F8FE;
    margin: 0;
`;

const PageLayout = () => {
    return ( 
        <>
            <div>
                <Header/>
                    
                    <Div>
                    <Outlet/>
                    </Div>
                    
                <Footer/>
            </div>
        </>
    );
}


export default PageLayout;
