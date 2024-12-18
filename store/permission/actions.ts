import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  SET_IS_LOADING,
  SET_IS_SUBMITTING,
  SET_PERMISSION_DATA,
  SET_PERMISSIONS_DATA,
  SET_PERMISSIONS_METADATA,
  SET_SEARCHED_PERMISSIONS_DATA,
  RESET_SEARCHED_PERMISSIONS_DATA,
  CREATE_PERMISSION_DATA,
  REMOVE_PERMISSION_DATA,
  UPDATE_PERMISSION_DATA,
} from './action-types';

import {
  PermissionState,
  SetIsLoadingType,
  SetIsSubmittingType,
  SetPermissionDataType,
  SetPermissionsDataType,
  SetPermissionsMetadataType,
  SetSearchedPermissionsDataType,
  ResetSearchedPermissionsDataType,
  CreatePermissionDataType,
  RemovePermissionDataType,
  UpdatePermissionDataType,
} from './types';

import { api } from 'constants/url';

import { generateQuery } from 'utils/store';
import { setErrorMessage } from 'store/app/actions';

import { network } from 'utils/network';
import { q } from 'constants/query';

export type AppThunk = ActionCreator<
  ThunkAction<Promise<boolean>, PermissionState, null, Action<string>>
>;

export const setIsLoading = (payload): SetIsLoadingType => ({
  type: SET_IS_LOADING,
  payload,
});

export const setIsSubmitting = (payload): SetIsSubmittingType => ({
  type: SET_IS_SUBMITTING,
  payload,
});

export const setPermissionData = (payload): SetPermissionDataType => ({
  type: SET_PERMISSION_DATA,
  payload,
});

export const setPermissionsData = (payload): SetPermissionsDataType => ({
  type: SET_PERMISSIONS_DATA,
  payload,
});

export const setPermissionsMetadata = (payload): SetPermissionsMetadataType => ({
  type: SET_PERMISSIONS_METADATA,
  payload,
});

export const setSearchedPermissionsData = (payload): SetSearchedPermissionsDataType => ({
  type: SET_SEARCHED_PERMISSIONS_DATA,
  payload,
});

export const resetSearchedPermissionsData = (payload): ResetSearchedPermissionsDataType => ({
  type: RESET_SEARCHED_PERMISSIONS_DATA,
  payload,
});

export const createPermissionData = (payload): CreatePermissionDataType => ({
  type: CREATE_PERMISSION_DATA,
  payload,
});

export const removePermissionData = (payload): RemovePermissionDataType => ({
  type: REMOVE_PERMISSION_DATA,
  payload,
});

export const updatePermissionData = (payload): UpdatePermissionDataType => ({
  type: UPDATE_PERMISSION_DATA,
  payload,
});

export const fetchPermission: AppThunk =
  ({ permissionId }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const { data, status } = await network({ dispatch }).get(`${api.permission}${permissionId}/`);

      if (status === 200 || (status > 200 && status < 300)) {
        if (data) {
          dispatch(setPermissionData(data));
          dispatch(setIsLoading(false));
          return true;
        }
      }
      return false;
    } catch (error) {
      error.response && dispatch(setErrorMessage(error));
      dispatch(setIsLoading(false));
      return false;
    }
  };

export const fetchPermissions: AppThunk =
  ({ query = q, columns, searchable, search }) =>
  async (dispatch: Dispatch): Promise<boolean> => {
    try {
      const link = generateQuery({ url: api.permission, query, columns, searchable });

      dispatch(setIsLoading(true));
      const { data, status } = await network({ dispatch }).get(link);

      if (status === 200 || (status > 200 && status < 300)) {
        if (data) {
          search ? dispatch(setSearchedPermissionsData(data)) : dispatch(setPermissionsData(data));
          dispatch(setIsLoading(false));
          return true;
        }
      }
      return false;
    } catch (error) {
      error.response && dispatch(setErrorMessage(error));
      dispatch(setIsLoading(false));
      return false;
    }
  };

export const createPermission: AppThunk =
  ({ values }) =>
  async (dispatch: Dispatch): Promise<boolean> => {
    try {
      dispatch(setIsSubmitting(true));
      const { data, status } = await network({ dispatch }).post(api.permission, values);

      if (status === 200 || (status > 200 && status < 300)) {
        dispatch(createPermissionData(data));
        dispatch(setIsSubmitting(false));

        return true;
      }
      return false;
    } catch (error) {
      error.response && dispatch(setErrorMessage(error));
      dispatch(setIsSubmitting(false));
      return false;
    }
  };

export const updatePermission: AppThunk =
  ({ permissionId, values }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setIsSubmitting(true));
      const { data, status } = await network({ dispatch }).put(
        `${api.permission}${permissionId}/`,
        values,
      );

      if (status === 200 || (status > 200 && status < 300)) {
        if (data) {
          dispatch(updatePermissionData(data));
          dispatch(setIsSubmitting(false));
          return true;
        }
      }
      return false;
    } catch (error) {
      error.response && dispatch(setErrorMessage(error));
      dispatch(setIsSubmitting(false));
      return false;
    }
  };

export const deletePermission: AppThunk =
  ({ permissionId }) =>
  async (dispatch: Dispatch): Promise<boolean> => {
    try {
      dispatch(setIsSubmitting(true));
      const { status } = await network({ dispatch }).delete(`${api.permission}${permissionId}/`);

      if (status === 200 || status > 200) {
        dispatch(removePermissionData({ id: permissionId }));
        dispatch(setIsSubmitting(false));
        return true;
      }
      return false;
    } catch (error) {
      error.response && dispatch(setErrorMessage(error));
      dispatch(setIsSubmitting(false));
      return false;
    }
  };
