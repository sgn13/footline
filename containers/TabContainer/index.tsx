import React, { useState } from 'react';
import theme, { styled } from '../../theme/styled-components';

const index = ({ tabheaders, children = null, onClick, active, direction = 'row' }) => {
  const TabContainer = styled.div`
    display: flex;
    background: ${theme.primary.default};
    width: fit-content;
    color: white;

    flex-direction: ${direction};
  `;
  const Tablist = styled.div`
    padding: 0.5rem;
    border: 1px solid white;
    cursor: pointer;

    &:hover {
      background: white;
      border: 1px solid ${theme.primary.default};
      color: ${theme.primary.default};
    }
  `;
  const Container = styled.div`
    padding: 1rem;
    background: #ffffff;
    border-radius: 7px;
  `;
  const TabChildren = styled.div`
    padding: 1rem;
  `;

  return (
    <Container>
      <TabContainer>
        {tabheaders?.map((list) => {
          return (
            <Tablist
              className={list === active ? 'active' : ''}
              id={list}
              onClick={(list) => onClick(list)}
            >
              {list}
            </Tablist>
          );
        })}
      </TabContainer>
      <TabChildren>{children}</TabChildren>
    </Container>
  );
};

export default index;
