import { Reducer } from 'redux';

import {
  SET_IS_LOADING,
  SET_IS_SUBMITTING,
  SET_IS_PERMISSION_LOADING,
  SET_NOTIFICATION_DATA,
  RESET_NOTIFICATION_DATA,
  SET_SIDEBAR,
  SET_ME,
} from './action-types';

import { ApplicationState, ApplicationActionTypes } from './types';

export const initialState: ApplicationState = {
  token: '',
  isLoading: false,
  isSubmitting: false,
  isPermissionLoading: false,
  notification: [],
  me: undefined,
  sidebar: [],
};

const reducer: Reducer<ApplicationState> = (
  state: ApplicationState = initialState,
  action: ApplicationActionTypes,
): ApplicationState => {
  const { notification } = state;

  switch (action.type) {
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_IS_SUBMITTING: {
      return {
        ...state,
        isSubmitting: action.payload,
      };
    }
    case SET_IS_PERMISSION_LOADING: {
      return {
        ...state,
        isPermissionLoading: action.payload,
      };
    }
    case SET_NOTIFICATION_DATA: {
      return {
        ...state,
        notification: [...notification, action.payload],
        isLoading: false,
      };
    }
    case RESET_NOTIFICATION_DATA: {
      return {
        ...state,
        notification: [],
        isLoading: false,
      };
    }
    case SET_ME: {
      return { ...state, me: action.payload };
    }
    case SET_SIDEBAR: {
      return { ...state, sidebar: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
