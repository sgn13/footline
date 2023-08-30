import { api } from 'constants/url';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { network } from 'utils/network';
import {
  SET_IS_LOADING,
  SET_IS_SUBMITTING,
  SET_IS_PERMISSION_LOADING,
  SET_NOTIFICATION_DATA,
  RESET_NOTIFICATION_DATA,
  SET_SIDEBAR,
  SET_ME,
} from './action-types';
import {
  ApplicationState,
  NotificationPayloadType,
  ResetNotificationDataType,
  SetIsLoadingType,
  SetIsSubmittingType,
  SetIsPermissionLoadingType,
  SetNotificationDataType,
  SetSidebarType,
  SetMeType,
} from './types';

export type AppThunk = ActionCreator<
  ThunkAction<Promise<boolean>, ApplicationState, null, Action<string>>
>;

export const setMe = (payload): SetMeType => ({
  type: SET_ME,
  payload,
});

export const setIsLoading = (payload: boolean): SetIsLoadingType => ({
  type: SET_IS_LOADING,
  payload,
});

export const setIsSubmitting = (payload: boolean): SetIsSubmittingType => ({
  type: SET_IS_SUBMITTING,
  payload,
});

export const setIsPermissionLoading = (payload: boolean): SetIsPermissionLoadingType => ({
  type: SET_IS_PERMISSION_LOADING,
  payload,
});

export const setNotification = (payload: NotificationPayloadType): SetNotificationDataType => ({
  type: SET_NOTIFICATION_DATA,
  payload,
});

export const resetNotification = (): ResetNotificationDataType => ({
  type: RESET_NOTIFICATION_DATA,
});

export const setSidebar = (payload): SetSidebarType => ({
  type: SET_SIDEBAR,
  payload,
});

export const setErrorMessage = (err: {
  response: { name: string; data: { message: string } };
}): SetNotificationDataType => {
  let message;
  if (err && err.response && err.response.data) {
    const errorKeyArray = Object.keys(err.response.data);
    const errorMessageArray = Object.values(err.response.data);
    if (errorMessageArray.length && errorMessageArray[0].length) {
      message = `${errorMessageArray[0]} : ${errorKeyArray.length && errorKeyArray[0]}`;
    }
  }
  return {
    type: SET_NOTIFICATION_DATA,
    payload: {
      name: (err && err.response && err.response.name) || 'Error',
      message: message || 'Error has occurred',
      level: 'error',
    },
  };
};

export const logout = () => {
  sessionStorage.removeItem('token');
  window.localStorage.setItem('logout', Date.now().toString());

  window.location.href = '/login';
};

export const fetchMe: AppThunk =
  () =>
  async (dispatch: Dispatch): Promise<boolean> => {
    try {
      dispatch(setIsLoading(true));
      dispatch(setIsPermissionLoading(true));

      const { data, status } = await network({ dispatch }).get(api.me);
      if (status === 200) {
        if (data) {
          dispatch(setMe({ ...data }));
          dispatch(setIsLoading(false));
          dispatch(setIsPermissionLoading(false));
        }
        return true;
      }
      return false;
    } catch (error) {
      dispatch(setErrorMessage(error));
      return false;
    }
  };

export const login =
  ({ values }) =>
  async (dispatch) => {
    sessionStorage.setItem('token', 'token');

    const redirectUrl = window.localStorage.getItem('redirectTo') || '/';
    window.location.href = redirectUrl;
    // try {
    //   dispatch(setIsSubmitting(true));

    //   const { status, data } = await network({
    //     dispatch,
    //     requireToken: false,
    //   }).post(api.login, values);

    //   if (status === 200 || status > 200) {
    //     if (data) {
    //       const { token } = data;

    //       sessionStorage.setItem('token', token);

    //       const redirectUrl = window.localStorage.getItem('redirectTo') || '/';
    //       window.location.href = redirectUrl;

    //       dispatch(setIsSubmitting(false));

    //       dispatch(
    //         setNotification({
    //           name: 'Login',
    //           message: data.message,
    //           level: 'success',
    //         }),
    //       );
    //       return true;
    //     } else {
    //       dispatch(setIsSubmitting(false));
    //       dispatch(
    //         setNotification({
    //           name: 'Error',
    //           message: data,
    //           level: 'error',
    //         }),
    //       );
    //     }
    //   }
    // } catch (error) {
    //   error.response && dispatch(setErrorMessage(error));
    // }
  };
export const changepassword =
  ({ values }) =>
  async (dispatch) => {
    try {
      dispatch(setIsSubmitting(true));

      const { status, data } = await network({
        dispatch,
        requireToken: false,
      }).patch(api.changepassword, values);

      if (status === 200 || status > 200) {
        if (data) {
          const { token } = data;

          sessionStorage.setItem('token', token);

          const redirectUrl = window.localStorage.getItem('redirectTo') || '/';
          window.location.href = redirectUrl;

          dispatch(setIsSubmitting(false));

          dispatch(
            setNotification({
              name: 'Password Changed',
              message: data.message,
              level: 'success',
            }),
          );
          return true;
        } else {
          dispatch(setIsSubmitting(false));
          dispatch(
            setNotification({
              name: 'Error',
              message: data,
              level: 'error',
            }),
          );
        }
      }
    } catch (error) {
      error.response && dispatch(setErrorMessage(error));
    }
  };
