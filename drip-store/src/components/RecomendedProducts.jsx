

import Section from '../components/Section'
import ProductListing from '../components/ProductListing'

const RecommendedProducts = () => {
  const products = [
    {
      name: "Nome do produto 1",
      image: "../../public/0267595BA8.avif",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "Nome do produto 2",
      image: "../../public/0267595BA8.avif",
      price: 49.9
    },
    {
        name: "Nome do produto 2",
        image: "../../public/0267595BA8.avif",
        price: 49.9
    },
    {
        name: "Nome do produto 2",
        image: "../../public/0267595BA8.avif",
        price: 49.9
    },
    {
        name: "Nome do produto 2",
        image: "../../public/0267595BA8.avif",
        price: 49.9
    },
   
  ];

  return (
    <Section
      title="Produtos recomendados"
      titleAlign="left"
      link={{ text: "Ver todos", href: "/products" }}
    >
      <ProductListing products={products} />
    </Section>
  );
};

export default RecommendedProducts;
