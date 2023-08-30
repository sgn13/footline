import { styled } from 'theme/styled-components';

export const FilterWrapper = styled.div`
  background: #fff;
  border-radius: 7px;

  margin-bottom: 1rem;

  padding: 1rem;

  p {
    font-weight: bold;

    font-size: 1rem;

    margin-bottom: 1rem;
  }

  .actions {
    width: 100%;

    display: flex;
    justify-content: flex-end;

    margin-top: 1rem;

    button {
      margin-left: 0.5rem;
    }
  }
`;
