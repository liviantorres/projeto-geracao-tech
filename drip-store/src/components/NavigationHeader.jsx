import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationHeader = () => {

    const ContainerWrap = styled.div`
        display: flex;
        justify-content: start;
        margin-left: 130px;
        margin-top: 50px;
        transition: 200ms;
        & a{ 
            font-family: 'Inter', sans-serif;
            text-decoration: none;
            font-weight: 400;
            transition: 200ms;
            margin: 12px;
            color: #474747;
            &:hover{
                color: #C92071;
                
            }
        }
        & .active{
                font-weight: bold;
                color: #C92071;
                border-bottom: 4px solid #C92071;
                border-radius: 2px;
            }
       
    `;

    return ( 
        <>
           <ContainerWrap>
            <NavLink to='/' end>Home</NavLink>
            <NavLink to='/produtos'>Produtos</NavLink>
            <NavLink to='/categorias'>Categorias</NavLink>
            <NavLink to='/meus-pedidos'>Meus Pedidos</NavLink>
           </ContainerWrap>
        </>
     );
}
 
export default NavigationHeader;