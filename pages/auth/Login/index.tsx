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
      <div className="main_container">
        <div className="main_inner_container">
          <div className="flex_container">
            <div className="left_container">
              <div style={{ padding: '0 22%' }}>
                <AuthForm
                  formTitle={'Login'}
                  formDesc={'Welcome! Please enter your details'}
                  elements={{ email: true, password: true }}
                  buttonName={'Login'}
                  onSubmit={(data) => {}}
                />
              </div>
            </div>
            <div className="right_container">
              <div style={{ padding: '0 22%' }}>
                <h6>Nice to see you again.</h6>
                <h2> WELCOME BACK</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad debitis autem
                  explicabo repellendus nesciunt veritatis sed assumenda cumque aliquam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
