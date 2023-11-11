import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Button from 'components/Button';
import theme, { styled } from 'theme/styled-components';

const BodyHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${theme.primary.default};
  }
`;

const Body: React.FC<{
  title?: string;
  goBack?: boolean;
  config?: { use: boolean; title: boolean; goBack: boolean };
}> = ({ children, title = '', config }) => {
  useEffect(() => {
    if (title) {
      document.title = title || '';
    }
  }, [title]);

  const history = useHistory();

  return (
    <>
      {/* {config.use && (
        <BodyHeaderWrapper>
          <span>{config.title && title}</span>
          {config.goBack && (
            <Button size="sm" onClick={() => history.goBack()} icon={<FaArrowLeft />}>
              Back
            </Button>
          )}
        </BodyHeaderWrapper>
      )}
      <div /> */}
      {children}
    </>
  );
};

export default Body;
