import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {} from 'store/app/actions';

import { AuthFormContainer, AuthForm, AuthPageWrapper } from 'components/Form/Auth';
import theme, { styled } from 'theme/styled-components';
import { AppState } from 'store/reducer';
import { resetNotification } from 'store/app/actions';
import NotificationComponent from 'components/Notification/index';

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

const ResetPassword = ({ notification, resetNotification }) => {
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
              formTitle={'Reset Password'}
              elements={{ password: true, confirmPassword: true }}
              buttonName={'Reset'}
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

export default connector(ResetPassword);
