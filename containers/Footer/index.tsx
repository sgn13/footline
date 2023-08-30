import React from 'react';
import theme, { styled } from 'theme/styled-components';

const FooterWrap = styled.div`
  background-color: ${theme.secondary.default};
  padding: 0.6rem;
  text-align: center;
  width: 100%;
  color: white;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrap>© {new Date().getFullYear()} Mangosoftsolution | All Rights Reserved.</FooterWrap>
  );
};

export default Footer;
