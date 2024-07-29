import {useNavigate} from 'react-router-dom'
import { useRef } from 'react';
import {styled} from 'styled-components'
import lupa from '../assets/lupa.svg'


const SearchField = () => {
    const inputRef = useRef(null)
    const navigate = useNavigate();


    const handleSearch = () =>{
        const search = inputRef.current.trim()
        if(search){
            navigate(`/products?filter=${encodeURIComponent(search)}`)
        }
    }

    const handleKeyDow = (event) => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    }

    const ContainerWrap = styled.div`
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: #cccccc43;
        border-radius: 4px;
        padding: 0 15px;
    `;

    const InputArea = styled.input`
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        width: 450px;
        height: 50px;
        background: none;
        outline: none;
        border: none;     
    `;
    
    const Lupa = styled.img`
        width: 24px;
        height: 24px;
      cursor: pointer;  
    `;


    return ( 
        <>
            <ContainerWrap>
                <InputArea type="text" placeholder="Pesquisar produto..." onKeyDown={handleKeyDow}/>
                <Lupa src={lupa} onClick={handleSearch}/>
            </ContainerWrap>
        </>
     );
}
 
export default SearchField;