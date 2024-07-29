import { styled } from "styled-components";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

// Importar imagens
import slide1 from "../../public/home-slide-1.jpeg";
import slide2 from "../../public/home-slide-2.jpeg";
import slide3 from "../../public/home-slide-3.jpeg";
import slide4 from "../../public/home-slide-4.jpeg";
import slide5 from "../../public/home-slide-5.jpeg";
import slide6 from "../../public/home-slide-6.jpeg";
import slide7 from "../../public/home-slide-7.jpeg";
import slide8 from "../../public/home-slide-8.jpeg";

import collection1 from "../../public/collection-1.png";
import collection2 from "../../public/collection-2.png";
import collection3 from "../../public/collection-3.png";

import product1 from "../../public/product-thumb-1.jpeg";
import product3 from "../../public/product-thumb-3.jpeg";
import product4 from "../../public/product-thumb-4.jpeg";
import product5 from "../../public/product-thumb-5.jpeg";

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  align-items: center;
  background-color: #F9F8FE;
`;

const ImageGallerySection = styled.div`
  
`;

const CollectionsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 12px;
  img {
    border-radius: 6px;
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
`;

const HomePage = () => {
  // Dados para o slider de imagens
  const images = [
    { src: slide1 },
    { src: slide2 },
    { src: slide3 },
    { src: slide4 },
    { src: slide5 },
    { src: slide6 },
    { src: slide7 },
    { src: slide8 },
  ];

  // Dados para a seção de coleções em destaque
  const collectionImages = [
    { src: collection1 },
    { src: collection2 },
    { src: collection3 },
  ];

  // Dados para a seção de produtos em alta
  const products = [
    {
      name: "Nome do produto",
      image: product1,
      price: "R$ 200,00",
      priceDiscount: "R$ 149,90",
    },
    {
      name: "Nome do produto",
      image: product3,
      price: "R$ 49,90",
    },
    {
      name: "Nome do produto",
      image: product4,
      price: "R$ 49,90",
    },
    {
      name: "Nome do produto",
      image: product5,
      price: "R$ 49,90",
    },
  ];

  return (
    <ContainerWrap>
      <ImageGallerySection>
        <Gallery
          className="home"
          width="1440px"
          height="681px"
          radius="4px"
          images={images}
        />
      </ImageGallerySection>

      <Section title="Coleções em destaque" titleAlign="center">
        <CollectionsSection>
          {collectionImages.map((image, index) => (
            <img key={index} src={image.src} alt={`Coleção ${index + 1}`} />
          ))}
        </CollectionsSection>
      </Section>

      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={products} />
      </Section>
    </ContainerWrap>
  );
};

export default HomePage;
