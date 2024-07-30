
import PropTypes from 'prop-types';
import styled from 'styled-components';
import starIcon from '../../public/star.svg';

const BuyBoxContainer = styled.div`
  padding: 20px;
  border: 1px solid #D3D3D3;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40%;

`;

const ProductName = styled.h1`
font-family: 'Inter', sans-serif;
font-weight: 700;
  font-size: 32px;
  color: #4A4A4A;
`;

const ProductReference = styled.p`
  font-size: 12px;
  color: #A3A3A3;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Stars = styled.span`
  background-color: #FFC107;
  border-radius: 4px;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  
`;

const Rating = styled.span`
  font-size: 14px;
  color: #D3D3D3;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
`;

const PriceOriginal = styled.span`
  font-size: 16px;
  color: #A3A3A3;
  text-decoration: line-through;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
`;

const PriceDiscount = styled.span`
  font-size: 32px;
  color: #4A4A4A;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 14px;
  color: #4A4A4A;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

const BuyButton = styled.button`
width: 20%;
  background-color: #FFC107;
  color: #FFFFFF;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 600;
`;

const Descricao = styled.div`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #8F8F8F;
`;

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <BuyBoxContainer>
      <ProductName>{name}</ProductName>
      <ProductReference>Ref: {reference}</ProductReference>
      <ProductRating>
        <Stars>
          {stars} <img src={starIcon} alt="Star Icon" />
        </Stars>
        <Rating>{rating} avaliações</Rating>
      </ProductRating>
      <ProductPrice>
        {priceDiscount ? (
          <>
            <PriceDiscount>R${priceDiscount}</PriceDiscount>
            <PriceOriginal>R${price}</PriceOriginal>
          </>
        ) : (
          <PriceDiscount>R${price}</PriceDiscount>
        )}
      </ProductPrice>
      <Descricao>Descrição do produto:</Descricao>
      <Description>{description}</Description>
      {children}
      <BuyButton>COMPRAR</BuyButton>
    </BuyBoxContainer>
  );
};

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BuyBox;
