import Logo from './Logo'
import SearchField from './SearchField'
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

    const HeaderContainer = styled.div`
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    `
    

    return ( 
        <>
            <HeaderContainer>
                <ContainerWrap>
                    <Logo color='#C92071'/>
                    <SearchField/>
                    <RelationamentArea/>
                    <img src={carrinho}/>
                </ContainerWrap>
                <NavigationHeader/>
                </HeaderContainer>
        </>
     );
}
 
export default Header;