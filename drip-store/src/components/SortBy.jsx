import {styled} from 'styled-components'


const Label = styled.label`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #474747;
`;
const Select = styled.select`
   border: 1px solid #F9F8FE;
    outline: none;
    cursor: pointer;
`;

const Option = styled.option`
    font-family: "Inter", sans-serif;
    font-weight: 400;
`;
const SortByContainer = styled.div`
    width: 308px;
    height: 60px;
    border: 1px solid #474747;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const SortBy = () => {
    return ( 
        <>
            <SortByContainer>
                <Label htmlFor="">Ordenar por:</Label>
                <Select name="" id="">
                    <Option value="">Menor Preço</Option>
                    <Option value="">Maior Preço</Option>
                </Select>
            </SortByContainer>
        </>
     );
}
 
export default SortBy;