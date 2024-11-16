import React from 'react';

import { Route, BrowserRouter, HashRouter, Redirect, Switch } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from 'store/reducer';

import Loader from 'components/Loader';
import PageTitle from 'components/PageTitle';
import ScrollToTop from 'components/ScrollToTop';

import { messageRoutes, authRoutes, routes } from './routes';
import Body from 'containers/Body';
import { fetchMe } from 'store/app/actions';
import { useEffect } from 'react';
import { fetchPermissions } from 'store/permission/actions';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Dnd from 'pages/dnd';

// const Index = React.lazy(() => import('./pages/Index'));
const Layout = React.lazy(() => import('containers/Layout'));

const AppRouter: React.FC<PropsFromRedux> = ({ fetchPermissions, fetchMe, me }) => {
  // useEffect(() => {
  //   if (sessionStorage.getItem('token')) {
  //     !me && fetchMe();
  //     fetchPermissions({});
  //   }
  // }, [me]);

  return (
    //  <DndProvider backend={HTML5Backend}>
    //     /* Your Drag-and-Drop Application */
    //     Hello
    //     <Dnd/>
    //   </DndProvider>
    <DndProvider backend={HTML5Backend}>
      <HashRouter>
        <ScrollToTop />
        <React.Suspense fallback={<>Loading ...</>}>
          <Switch>
            {/* {authRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Body config={route.bodyConfig} title={route.title}>
                  {sessionStorage.getItem('token') ? (
                    <Redirect to="/" />
                  ) : (
                    <route.component {...props} />
                  )}
                </Body>
              )}
            />
          ))} */}
            {/* 
          {messageRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <PageTitle title={route.title}>
                  <route.component {...props} />
                </PageTitle>
              )}
            />
          ))} */}
            {/* <Route
            path="/"
            exact
            children={(props) =>
              sessionStorage.getItem('token') ? (
                <PageTitle title="Home">
                  <Index {...props} />
                </PageTitle>
              ) : (
                <Redirect to="/login" />
              )
            }
          /> */}
            {/* <Route
            children={(props) =>
              sessionStorage.getItem('token') ? <Layout {...props} /> : <Redirect to="/" />
            }
          /> */}
            <Route children={(props) => <Layout {...props} />} />
            {/* {routes.map((route, idx) => (
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
          ))} */}
          </Switch>
        </React.Suspense>
      </HashRouter>
      /{' '}
    </DndProvider>
  );
};

const mapStateToProps = ({ appState: { me } }: AppState) => ({
  me,
});

const mapDispatchToProps = {
  fetchMe,
  fetchPermissions,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AppRouter);
