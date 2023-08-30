import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  SET_IS_LOADING,
  SET_IS_SUBMITTING,
  SET_EXAMPLE_DATA,
  SET_EXAMPLES_DATA,
  SET_EXAMPLES_METADATA,
  SET_SEARCHED_EXAMPLES_DATA,
  RESET_SEARCHED_EXAMPLES_DATA,
  CREATE_EXAMPLE_DATA,
  REMOVE_EXAMPLE_DATA,
  UPDATE_EXAMPLE_DATA,
} from './action-types';

import {
  ExampleState,
  SetIsLoadingType,
  SetIsSubmittingType,
  SetExampleDataType,
  SetExamplesDataType,
  SetExamplesMetadataType,
  SetSearchedExamplesDataType,
  ResetSearchedExamplesDataType,
  CreateExampleDataType,
  RemoveExampleDataType,
  UpdateExampleDataType,
} from './types';

import { api } from 'constants/url';

import { formDataGenerator, generateQuery, generateMeta } from 'store/utils';
import { setErrorMessage } from 'store/app/actions';

import { network } from 'utils/network';
import { q } from 'constants/query';

export type AppThunk = ActionCreator<
  ThunkAction<Promise<boolean>, ExampleState, null, Action<string>>
>;

export const setIsLoading = (payload): SetIsLoadingType => ({
  type: SET_IS_LOADING,
  payload,
});

export const setIsSubmitting = (payload): SetIsSubmittingType => ({
  type: SET_IS_SUBMITTING,
  payload,
});

export const setExampleData = (payload): SetExampleDataType => ({
  type: SET_EXAMPLE_DATA,
  payload,
});

export const setExamplesData = (payload): SetExamplesDataType => ({
  type: SET_EXAMPLES_DATA,
  payload,
});

export const setExamplesMetadata = (payload): SetExamplesMetadataType => ({
  type: SET_EXAMPLES_METADATA,
  payload,
});

export const setSearchedExamplesData = (payload): SetSearchedExamplesDataType => ({
  type: SET_SEARCHED_EXAMPLES_DATA,
  payload,
});

export const resetSearchedExamplesData = (payload): ResetSearchedExamplesDataType => ({
  type: RESET_SEARCHED_EXAMPLES_DATA,
  payload,
});

export const createExampleData = (payload): CreateExampleDataType => ({
  type: CREATE_EXAMPLE_DATA,
  payload,
});

export const removeExampleData = (payload): RemoveExampleDataType => ({
  type: REMOVE_EXAMPLE_DATA,
  payload,
});

export const updateExampleData = (payload): UpdateExampleDataType => ({
  type: UPDATE_EXAMPLE_DATA,
  payload,
});

export const fetchExample: AppThunk =
  ({ exampleId }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const { data, status } = await network({ dispatch }).get(`${api.example}${exampleId}/`);

      if (status === 200 || (status > 200 && status < 300)) {
        if (data) {
          dispatch(setExampleData(data));
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

export const fetchExamples: AppThunk =
  ({ query = q }) =>
  async (dispatch: Dispatch): Promise<boolean> => {
    try {
      const link = generateQuery({ url: api.example, query });

      dispatch(setIsLoading(true));
      const { data, status } = await network({ dispatch }).get(link);

      if (status === 200 || (status > 200 && status < 300)) {
        const { results } = data;
        const metadata = generateMeta({ data, query, results });

        if (results) {
          dispatch(setExamplesData(results));
          dispatch(setExamplesMetadata(metadata));
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

export const createExample: AppThunk =
  ({ values }) =>
  async (dispatch: Dispatch): Promise<boolean> => {
    try {
      const body = formDataGenerator({ data: values });

      dispatch(setIsSubmitting(true));
      const { data, status } = await network({ dispatch }).post(api.example, body);

      if (status === 200 || (status > 200 && status < 300)) {
        dispatch(createExampleData(data));
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

export const updateExample: AppThunk =
  ({ exampleId, values }) =>
  async (dispatch: Dispatch) => {
    try {
      const body = formDataGenerator({ data: values });

      dispatch(setIsSubmitting(true));
      const { data, status } = await network({ dispatch }).put(`${api.example}${exampleId}/`, body);

      if (status === 200 || (status > 200 && status < 300)) {
        if (data) {
          dispatch(updateExampleData(data));
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

export const deleteExample: AppThunk =
  ({ exampleId }) =>
  async (dispatch: Dispatch): Promise<boolean> => {
    try {
      dispatch(setIsSubmitting(true));
      const { status } = await network({ dispatch }).delete(`${api.example}${exampleId}/`);

      if (status === 200 || status > 200) {
        dispatch(removeExampleData({ id: exampleId }));
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
