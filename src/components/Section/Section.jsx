import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
