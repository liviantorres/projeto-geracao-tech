import { styled } from "styled-components";
import SortBy from "../components/SortBy";
import FilterBy from "../components/FilterBy";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

const ProductListingContainer = styled.div`

  background-color: #f9f8fe;
  margin: 30px;
  display: flex;
`;
//{ title, titleAlign, link, children }

const products = [
  {
    name: "Thumb 1",
    image: "../../public/0267595BA8.avif",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "Thumb 2",
    image: "../../public/product-thumb-2.jpeg",
    price: 49.9,
  },
  {
    name: "Thumb 3",
    image: "../../public/product-thumb-3.jpeg",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "Thumb 4",
    image: "../../public/product-thumb-4.jpeg",
    price: 49.9,
  },
  {
    name: "Thumb 5",
    image: "../../public/product-thumb-5.jpeg",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "Thumb 1",
    image: "../../public/product-thumb-1.jpeg",
    price: 49.9,
  },
  {
    name: "Thumb 2",
    image: "../../public/product-thumb-2.jpeg",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "Thumb 3",
    image: "../../public/product-thumb-3.jpeg",
    price: 49.9,
  },
  {
    name: "Thumb 4",
    image: "../../public/product-thumb-4.jpeg",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "Thumb 5",
    image: "../../public/product-thumb-5.jpeg",
    price: 49.9,
  },
  {
    name: "Thumb 1",
    image: "../../public/product-thumb-1.jpeg",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "Thumb 2",
    image: "../../public/product-thumb-2.jpeg",
    price: 49.9,
  },
 
];

const ProductListingPage = () => {
  return (
    <>
      <ProductListingContainer>
        <div>
          <SortBy />
          <FilterBy />
        </div>
        <Section title="" titleAlign="left">
          <ProductListing products={products} />
        </Section>
      </ProductListingContainer>
    </>
  );
};

export default ProductListingPage;
