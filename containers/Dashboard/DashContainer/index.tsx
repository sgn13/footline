import theme, { styled } from 'theme/styled-components';

export const DetailWrapper = styled.div``;
export const Cards = styled.div`
  display: flex;
  width: 25rem;
  justify-content: space-between;
  flex-wrap: wrap;
  svg {
    font-size: 2rem;
  }
`;
export const Card = styled.div`
  height: 7rem;
  margin-bottom: 1rem;
  width: 8rem;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5px;
  align-items: center;
  background: ${theme.primary.default};

  span {
    font-weight: 500;
    font-size: 2rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  margin: 2rem auto;
  font-size: 1.5rem;
  font-weight: 900;
  text-align: center;
  color: ${theme.primary.default};
`;
