import PropTypes from "prop-types";
import { styled } from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin: 20px;
  
`;

const Image = styled.img`
  width: 292px;
  height: 321px;
  box-shadow: 5px 5px 18px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Name = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  text-transform: capitalize;
`;

const Price = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: ${({ discount }) => (discount ? "400" : "700")};
  font-size: 24px;
  color: ${({ discount }) => (discount ? "#8F8F8F" : "#1F1F1F")};
  text-decoration: ${({ discount }) => (discount ? "line-through" : "none")};
`;

const PriceDiscount = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #1f1f1f;
`;

const ProductCard = ({ image, name, price, priceDiscount = "" }) => {
  return (
    <>
      <Card>
        <Image src={image} alt={name} />
        <Name>{name}</Name>
        <Price discount={priceDiscount}>{price}</Price>
        {priceDiscount && (
          <PriceDiscount discount={priceDiscount}>
            {priceDiscount}
          </PriceDiscount>
        )}
      </Card>
    </>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
};

export default ProductCard;
