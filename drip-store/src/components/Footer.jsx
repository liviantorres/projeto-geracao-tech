import styled from "styled-components";
import Logo from "./Logo";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import InfosFooter from './InfosFooter'

const Footer = () => {
  const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1f1f1f;
    justify-content: center;
    & p{
      display: flex;
      justify-content: center;
      background-color: #1f1f1f;
      color: white;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      padding: 20px;
    }
    
  `;
  const Hr = styled.hr`
      background-color: #1f1f1f;
      margin: 15px 50px;
      width: calc(100% - 100px); 
      border: none;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
`;


  const ContainerWrap = styled.footer`
    background-color: #1f1f1f;
    height: 100hv;
    color: white;
    display: flex;
    flex-direction: row;
  `;

  const ContainerWrapRigth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    text-decoration: none;
    margin-top: 30px;
    margin-left: 50px;
    width: 45%;
    & p {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        margin-top: 20px;
        width: 50%;
        padding: 1px;
    }
  `;

  const Icons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-top: 40px;
  `;
 

  const informacao = [
    {text: 'Sobre Drip Store', link: ''},
    {text: 'Segurança', link: ''},
    {text: 'Wishlist', link: ''},
    {text: 'Blog', link: ''},
    {text: 'Trabalhe conosco', link: ''},
    {text: 'Meus Pedidos', link: ''},
  ];

  const categoria = [
    {text: 'Camisetas', link: ''},
    {text: 'Calças', link: ''},
    {text: 'Bonés', link: ''},
    {text: 'Headphones', link: ''},
    {text: 'Tênis', link: ''},
  ];
  
  const contato = [
    {text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', link: ''},
    {text: '(85) 3051-3411', link: ''}
  ];
  
  return (
    <>
    <FooterContainer>
      <ContainerWrap>
        <ContainerWrapRigth>
          <Logo color={'white'}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo
            ab ut eligendi itaque ea iure natus aliquam deleniti doloremque
            aliquid magni facere ipsum necessitatibus quos, numquam nisi
            accusantium vel.
          </p>
          <Icons>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </Icons>
        </ContainerWrapRigth>

        <InfosFooter title="Informações" informartions={informacao}/>
        <InfosFooter title="Categorias" informartions={categoria}/>
        <InfosFooter title="Contato" informartions={contato}/>
      </ContainerWrap>
      <Hr />
      <p>© 2024 Digital Store</p>
      </FooterContainer>
    </>
  );
};

export default Footer;

