import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { changepassword } from 'store/app/actions';

import theme, { styled } from 'theme/styled-components';
import { useHistory } from 'react-router-dom';

import { AppState } from 'store/reducer';
import NotificationComponent from 'components/Notification/index';
import { resetNotification } from 'store/app/actions';
import ChangePasswordForm from './form';

const ChangePassword = ({ notification, resetNotification, changepassword, me }) => {
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);
  const history = useHistory();
  const ChangePasswordWrapper = styled.div``;

  return (
    <>
      <ChangePasswordWrapper>
        <ChangePasswordForm
          userId={me && me.user_id}
          onBack={() => history.goBack()}
          onCreate={async (values, { resetForm }) => {
            if (await changepassword({ values })) {
              resetForm();
            }
          }}
        />
      </ChangePasswordWrapper>

      {!!(notification && notification.length) && (
        <NotificationComponent data={notification[0]} resetNotification={resetNotification} />
      )}
    </>
  );
};

const mapStateToProps = ({ appState: { notification, me } }: AppState) => ({
  notification,
  me,
});

const mapDispatchToProps = { resetNotification, changepassword };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ChangePassword);
