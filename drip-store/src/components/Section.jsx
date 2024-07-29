import PropTypes from "prop-types";
import { styled } from "styled-components";

const SectionWrap = styled.div``;

const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  position: relative;
`;

const TitleSection = styled.h3`
  color: #474747;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  flex: 1;
  text-align: ${({titleAlign}) => titleAlign ? titleAlign : 'left'};
`;

const LinkSection = styled.a`
  color: #c92071;
  text-decoration: none;
  font-size: 18px;
  position: absolute;
  margin: 30px;
  right: 0;
`;

const SectionContent = styled.div``;

const Section = ({ title, titleAlign, link, children }) => {
  return (
    <SectionWrap>
      <HeaderSection>
        {link && <LinkSection href={link.href}>{link.text}</LinkSection>}
        <TitleSection titleAlign={titleAlign}>{title}</TitleSection>
      </HeaderSection>
      <SectionContent>{children}</SectionContent>
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
};

export default Section;
