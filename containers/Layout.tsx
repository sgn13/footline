import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { setSidebar } from 'store/app/actions';

import Nav from 'containers/Navbar';
import Content from 'containers/Content';

import Sidebar from 'containers/Sidebar';

import { styled } from 'theme/styled-components';
import Footer from 'containers/Footer';
import { AppState } from 'store/reducer';

import { fetchMe, resetNotification } from 'store/app/actions';
import { fetchPermissions } from 'store/permission/actions';

import NotificationComponent from 'components/Notification/index';
import Loader from 'components/Loader';

const AppBody = styled.div`
  display: flex;
`;
const AppBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout = ({
  sidebar,
  setSidebar,
  fetchMe,
  resetNotification,
  me,
  notification,
  fetchPermissions,
  isLoading,
}) => {
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    !me && fetchMe();
    fetchPermissions({});
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div id="overlays"></div>
      <Nav me={me} />
      <AppBody>
        <Sidebar
          sidebarItems={sidebar}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          active={active}
          setActive={setActive}
        />
        <AppBodyWrapper>
          <Content />
          <Footer />
        </AppBodyWrapper>
      </AppBody>
      {!!(notification && notification.length) && (
        <NotificationComponent data={notification[0]} resetNotification={resetNotification} />
      )}
    </>
  );
};

const mapStateToProps = ({ appState: { sidebar, me, notification, isLoading } }: AppState) => ({
  sidebar,
  me,
  notification,
  isLoading,
});

const mapDispatchToProps = { setSidebar, fetchMe, resetNotification, fetchPermissions };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Layout);
