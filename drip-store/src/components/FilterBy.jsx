import { styled } from 'styled-components'
import FilterGroup from './FilterGroup';


const FilterByContainer = styled.div`
    width: 308px;
    height: auto;
    background-color: white;
    
`;

const Title = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #474747;
    padding: 15px;
   
`;

const Hr = styled.hr`
    padding: 15px;
    margin: 10px;
    width: calc(100% - 70px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    border-left: none;
    border-right: none;
    
`;


const FilterBy = () => {
    return (  
        <>
        <FilterByContainer>
            <Title>Filtrar por</Title>
            <Hr/>
            <FilterGroup
                 title="Categoria"
                 inputType="checkbox"
                 options={[
                   { text: "Opção 1", value: "opt1" },
                   { text: "Opção 2" },
                   { text: "Opção 3", value: "opt3" },
                   { text: "Opção 4" }]}
            />
           
        </FilterByContainer>
        
        </>
    );
}
 
export default FilterBy;