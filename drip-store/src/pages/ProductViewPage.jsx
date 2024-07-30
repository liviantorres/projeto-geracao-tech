import styled from "styled-components";
import Gallery from "../components/Gallery";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductOptions from "../components/ProductOptions"; // Importe o componente ProductOptions
import BuyBox from "../components/BuyBox"; // Importe o componente BuyBox
import RecommendedProducts from "../components/RecomendedProducts";


const ProductViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const ContainerGalerryBuyBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 50px;
  
`;


const TituloOpcoes = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #8F8F8F;
`;

const images0 = [
  {"src": "../../public/0267595BA8.avif"},
  {"src": "../../public/0267595BA8.avif"},
  {"src": "../../public/0267595BA8.avif"},
  {"src": "../../public/0267595BA8.avif"},
];

const images1 = [
  {"src": "../../public/product-thumb-2.jpeg"},
  {"src": "../../public/product-thumb-2.jpeg"},
  {"src": "../../public/product-thumb-2.jpeg"},
  {"src": "../../public/product-thumb-2.jpeg"},
  {"src": "../../public/product-thumb-2.jpeg"},
];

const images2 = [
  {"src": "../../public/product-thumb-3.jpeg"},
  {"src": "../../public/product-thumb-3.jpeg"},
  {"src": "../../public/product-thumb-3.jpeg"},
  {"src": "../../public/product-thumb-3.jpeg"},
  {"src": "../../public/product-thumb-3.jpeg"},
];

const images3 = [
  {"src": "../../public/product-thumb-4.jpeg"},
  {"src": "../../public/product-thumb-4.jpeg"},
  {"src": "../../public/product-thumb-4.jpeg"},
  {"src": "../../public/product-thumb-4.jpeg"},
  {"src": "../../public/product-thumb-4.jpeg"},
];

const images4 = [
  {"src": "../../public/product-thumb-4.jpeg"},
  {"src": "../../public/product-thumb-4.jpeg"},
  {"src": "../../public/product-thumb-4.jpeg"},
  {"src": "../../public/product-thumb-4.jpeg"},
  {"src": "../../public/product-thumb-4.jpeg"},
];

const ProductViewPage = () => {
  let { id } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    switch (id) {
      case '0':
        setImages(images0);
        break;
      case '1':
        setImages(images1);
        break;
      case '2':
        setImages(images2);
        break;
      case '3':
        setImages(images3);
        break;
      case '4':
        setImages(images4);
        break;
      default:
        setImages(images4); 
    }
  }, [id]);

  const options = ["39", "41", "42"];
  const colors = ["#000000", "#FFFFFF", "#FF0000"];

  return ( 
    <>
    <ProductViewContainer>
      <ContainerGalerryBuyBox>
      <Gallery
        width='700px'
        height= '570px'
        radius='4px'
        showThumbs
        images={images}
      />
      <BuyBox
        name="Tênis Nike Revolution 6 Next Nature Masculino"
        reference="REF12345"
        stars={4.5}
        rating={120}
        price={299.99}
        priceDiscount={199.99}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
      >
        <TituloOpcoes>Tamanho:</TituloOpcoes>
        <ProductOptions
          options={options}
          radius="4px"
          shape="square"
          type="text"
        />
        <TituloOpcoes>Cor:</TituloOpcoes>
        <ProductOptions
          options={colors}
          radius="4px"
          shape="circle"
          type="color"
        />
      </BuyBox>
      </ContainerGalerryBuyBox>
      <RecommendedProducts/>
     
    </ProductViewContainer>
    
    </>
  );
}

export default ProductViewPage;
