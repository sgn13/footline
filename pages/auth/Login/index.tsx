import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { login } from 'store/app/actions';

import { AuthFormContainer, AuthForm, AuthPageWrapper } from 'components/Form/Auth';

import { resetNotification } from 'store/app/actions';
import theme, { styled } from 'theme/styled-components';
import { AppState } from 'store/reducer';
import NotificationComponent from 'components/Notification/index';

export const LoginOverlay = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginAnimation = styled.img`
  width: 100%;
`;

const Login = ({ login, notification, resetNotification, isSubmitting }) => {
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  return (
    <>
      hii
      {/* <AuthPageWrapper>
        <AuthFormContainer
          overlay={
            <LoginOverlay>
              <LoginAnimation />
            </LoginOverlay>
          }
          form={
            <AuthForm
              formTitle={'LOGIN'}
              isSubmitting={isSubmitting}
              elements={{ email: true, password: true }}
              buttonName={'Login'}
              onSubmit={async (values) => await login({ values })}
            />
          }
        />
      </AuthPageWrapper> */}
      {!!(notification && notification.length) && (
        <NotificationComponent data={notification[0]} resetNotification={resetNotification} />
      )}
    </>
  );
};

const mapStateToProps = ({ appState: { notification, isSubmitting } }: AppState) => ({
  notification,
  isSubmitting,
});

const mapDispatchToProps = { login, resetNotification };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Login);
