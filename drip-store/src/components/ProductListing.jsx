import { styled } from "styled-components";
import PropTypes from "prop-types";
import ProductCard from './ProductCard'

const ProductListingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  
`;
 

const ProductListing = ({ products }) => {
  

  return (
    <>
      <ProductListingContainer>
        {products.map((produto, index) => (
          <ProductCard
            key={index}
            name={produto.name}
            image={produto.image}
            price={produto.price}
            priceDiscount={produto.priceDiscount}
          />
        ))}
      </ProductListingContainer>
    </>
  );
};

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      priceDiscount: PropTypes.string,
    })
  ),
};

export default ProductListing;
