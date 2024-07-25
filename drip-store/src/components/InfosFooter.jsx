import PropTypes from 'prop-types' 
import styled from 'styled-components';


const InfosFooter = ({title, informartions}) => {

    const InfoContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 30px;
    `;
    const InfoTitle = styled.h3`
        font-family: 'Inter', sans-serif;
        font-weight: 700;
    `;
    const InfoList = styled.ul`
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
    
        & a{
            text-decoration: none;
            color: white;
        }
    `;

    return (  
        <>
        <InfoContainer>
            <InfoTitle>
                {title}
            </InfoTitle>
            <InfoList>
                {informartions.map((info, index)=>(
                    <li key={index}> <a href="{info.link}">{info.text}</a></li>
                ))

                }
            </InfoList>
        </InfoContainer>
        
        </>
    );
}


InfosFooter.propTypes = {
    title: PropTypes.string,
    informartions: PropTypes.arrayOf(
        PropTypes.shape(
            {
                text: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired,
            }
        )
    ).isRequired
}
 
export default InfosFooter;