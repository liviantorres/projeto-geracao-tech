import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from '../assets/logo-2.svg'

const LogoStyle = styled.div`
    width: 253px;
    height: 44px;
    display: inline-block;

    & img {
        filter: ${props => {
            switch (props.color) {
                case 'white':
                    return 'invert(1) brightness(1000%)';
                case '#C92071':
                    return 'invert(19%) sepia(65%) saturate(3565%) hue-rotate(314deg) brightness(93%) contrast(93%)';
                default:
                    return 'none';
            }
        }};
    }
`;

const Logo = ({ color }) => {
    return (
        <LogoStyle color={color}>
            <img src={logo} alt="" />
        </LogoStyle>
    );
}

Logo.propTypes = {
    color: PropTypes.string
}

export default Logo;
