import styled from "styled-components";
import PropTypes from 'prop-types';

const FilterGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    margin-bottom: 30px;
`;

const InputCheckbox = styled.input`
    width: 22px;
    height: 22px;
    margin-top: 5px;
    cursor: pointer;
    appearance: none; 
    border: 2px solid #474747; 
    border-radius: 2px;
    transition: 200ms;

    &:hover {
        background-color: #C92071;
    }

    &:checked {
        background-color: #C92071; 
        border-color: #C92071; 
    }
`;

const InputRadio = styled.input`
    width: 22px;
    height: 22px;
    margin-top: 5px;
    cursor: pointer;
    appearance: none; 
    border: 2px solid #474747; 
    border-radius: 50%;
    transition: 200ms;

    &:hover {
        background-color: #C92071;
    }

    &:checked {
        background-color: #C92071; 
        border-color: #C92071;
    }
`;

const LabelCheckbox = styled.label`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 4px;
    color: #474747;
`;

const Title = styled.h3`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    margin-bottom: 5px;
`;

const FilterGroup = ({ title, inputType, options }) => {
    const InputComponent = inputType === 'radio' ? InputRadio : InputCheckbox;

    return (
        <FilterGroupContainer>
            <Title>{title}</Title>
            {options.map((option, index) => (
                <LabelCheckbox key={index}>
                    <InputComponent type={inputType} name={title} value={option.value || option.text} />
                    {option.text}
                </LabelCheckbox>
            ))}
        </FilterGroupContainer>
    );
}

FilterGroup.propTypes = {
    title: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            value: PropTypes.string
        })
    ).isRequired
}

export default FilterGroup;
