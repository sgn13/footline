import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {} from 'store/app/actions';

import { AuthFormContainer, AuthForm, AuthPageWrapper } from 'components/Form/Auth';
import theme, { styled } from 'theme/styled-components';
import { AppState } from 'store/reducer';
import NotificationComponent from 'components/Notification/index';
import { resetNotification } from 'store/app/actions';

const LoginOverlay = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginAnimation = styled.img`
  width: 100%;
`;

const ForgotPassword = ({ notification, resetNotification }) => {
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  return (
    <>
      <AuthPageWrapper>
        <AuthFormContainer
          overlay={
            <LoginOverlay>
              <LoginAnimation src={''} />
            </LoginOverlay>
          }
          form={
            <AuthForm
              formTitle={'Forgot Password'}
              elements={{ email: true }}
              buttonName={'Submit'}
              onSubmit={(data) => {}}
            />
          }
        />
      </AuthPageWrapper>
      {!!(notification && notification.length) && (
        <NotificationComponent data={notification[0]} resetNotification={resetNotification} />
      )}
    </>
  );
};

const mapStateToProps = ({ appState: { notification } }: AppState) => ({
  notification,
});

const mapDispatchToProps = { resetNotification };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ForgotPassword);
