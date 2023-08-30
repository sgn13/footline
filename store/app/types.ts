import {
  SET_IS_LOADING,
  SET_IS_PERMISSION_LOADING,
  SET_NOTIFICATION_DATA,
  RESET_NOTIFICATION_DATA,
  SET_SIDEBAR,
  SET_ME,
  SET_IS_SUBMITTING,
} from './action-types';

export type NotificationPayloadType = {
  name: string;
  message: string;
  level: string;
};

export interface ApplicationState {
  token: string;
  isLoading: boolean;
  isSubmitting: boolean;
  isPermissionLoading: boolean;
  notification: NotificationPayloadType[];
  me: any;
  sidebar: any[];
}

export type SetIsLoadingType = {
  type: typeof SET_IS_LOADING;
  payload: boolean;
};
export type SetIsSubmittingType = {
  type: typeof SET_IS_SUBMITTING;
  payload: boolean;
};
export type SetIsPermissionLoadingType = {
  type: typeof SET_IS_PERMISSION_LOADING;
  payload: boolean;
};
export type SetNotificationDataType = {
  type: typeof SET_NOTIFICATION_DATA;
  payload: NotificationPayloadType;
};

export type ResetNotificationDataType = {
  type: typeof RESET_NOTIFICATION_DATA;
};

export type SetSidebarType = {
  type: typeof SET_SIDEBAR;
  payload: any;
};

export type SetMeType = {
  type: typeof SET_ME;
  payload: any;
};

export type ApplicationActionTypes =
  | SetIsLoadingType
  | SetIsSubmittingType
  | SetIsPermissionLoadingType
  | SetNotificationDataType
  | ResetNotificationDataType
  | SetSidebarType
  | SetMeType;
