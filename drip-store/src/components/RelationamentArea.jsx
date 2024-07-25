import { Link } from "react-router-dom";
import styled from "styled-components";

const RelationamentArea = () => {

    const ContainerWrap = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    `;

    const LinkCadastro = styled(Link)`
        text-decoration: underline;
        color: #474747;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        font-weight: 400;

    `;

    const ButtonEntrar = styled.button`
        background-color: #C92071;
        color: #F5F5F5;
        width: 114px;
        height: 40px;
        border-radius: 4px;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        border: none;
        cursor: pointer;
    `;
    


    return (
        <>
        
        <ContainerWrap>
            <LinkCadastro>Cadastre-se</LinkCadastro>
            <ButtonEntrar>Entrar</ButtonEntrar>
            
        </ContainerWrap>
        </>
    );
}
 
export default RelationamentArea;