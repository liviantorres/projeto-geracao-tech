import Logo from './Logo'
import FilterGroup from './FilterGroup'
import RelationamentArea from './RelationamentArea'
import NavigationHeader from './NavigationHeader'
import {styled} from 'styled-components'

import carrinho from '../assets/carrinho-de-compras.svg'

const Header = () => {

    const ContainerWrap = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 20px;
        margin-top: 40px;
    `;
    

    return ( 
        <>
                <ContainerWrap>
                    <Logo color='#C92071'/>
                    <FilterGroup/>
                    <RelationamentArea/>
                    <img src={carrinho}/>
                </ContainerWrap>
                <NavigationHeader/>
        </>
     );
}
 
export default Header;