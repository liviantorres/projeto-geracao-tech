import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

const ProductOptionsContainer = styled.div`
    display: flex;
    gap: 8px;
`;

const Option = styled.div`
    display: flex;
    justify-content: center;
    border-radius: ${(props) => props.shape === 'square' ? props.radius : '50%' };
    width: ${(props) => props.shape === 'square' ? '46px' : '31px'};
    height: ${(props) => props.shape === 'square' ? 'auto' : '31px'};
    border: 1px solid #CCCCCC;
    cursor: pointer;
    font-size: ${(props) => props.type === 'text' ? '24px' : '0'};
    color: ${(props) => (props.type === 'text' ? '#474747' : 'transparent')};
    background: ${(props) => (props.type === 'color' ? props.option : 'none')};
    &.selected {
        border: 2px solid #C92071;
    }
`;

const ProductOptions = ({ options, radius, shape, type }) => {
    const [select, setSelect] = useState(null);

    const handleSelectOption = (option) => {
        setSelect(option);
    }

  return (
    <>
      <ProductOptionsContainer>
        {options.map((option, index) => (
          <Option 
            key={index}
            radius={radius}
            shape={shape}
            type={type}
            option={option}
            className={select === option ? 'selected' : ''}
            onClick={() => handleSelectOption(option)}
          >
            {type === 'text' && option}

          </Option>
        ))}
      </ProductOptionsContainer>
    </>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
    })
  ).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(["square", "circle"]).isRequired,
  type: PropTypes.oneOf(["text", "color"]).isRequired,
};

export default ProductOptions;
