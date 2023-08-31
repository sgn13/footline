import React, { Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import routes from '../routes';

import Loader from 'components/Loader';

import theme, { styled } from 'theme/styled-components';
import Body from 'containers/Body';

const ContentBody = styled.main`
  // width: 100%;
  padding: 1rem;
  height: calc(100vh - ${theme.constant.appBar} - 35px);
  overflow-y: auto;

  // background: rgba(4, 103, 160, 0.01);
  background: #f4f7fb;
  border-radius: 1rem;
  margin: 1rem;

  ${theme.mixin.scrollbar({ size: '1em', foregroundColor: 'slategray' })};
`;

const Content = ({}) => {
  return (
    <ContentBody>
      {/* <Container fluid> */}
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Body config={route.bodyConfig} title={route.title}>
                  <route.component {...props} />
                </Body>
              )}
            />
          ))}
        </Switch>
      </Suspense>
      {/* </Container> */}
    </ContentBody>
  );
};

export default React.memo(Content);
