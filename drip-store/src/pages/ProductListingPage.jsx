import { styled } from "styled-components";
import SortBy from "../components/SortBy";
import FilterBy from "../components/FilterBy";

const ProductListingContainer = styled.div`
  height: 100vh;
  background-color: #F9F8FE;
  margin: 30px;
`;

const ProductListingPage = () => {
  return (
  <>
  <ProductListingContainer>
    <SortBy/>
    <FilterBy/>
  </ProductListingContainer>
  
  </>
  );
}
 
export default ProductListingPage;