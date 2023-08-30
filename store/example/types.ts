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

export interface ExampleState {
  isLoading: boolean;
  isSubmitting: boolean;

  example: any;
  examples: any;

  searchedExamples: any;

  metadata: any;
}

export type SetIsLoadingType = {
  type: typeof SET_IS_LOADING;
  payload: boolean;
};

export type SetIsSubmittingType = {
  type: typeof SET_IS_SUBMITTING;
  payload: boolean;
};

export type SetExampleDataType = {
  type: typeof SET_EXAMPLE_DATA;
  payload: any;
};

export type SetExamplesDataType = {
  type: typeof SET_EXAMPLES_DATA;
  payload: any;
};

export type SetExamplesMetadataType = {
  type: typeof SET_EXAMPLES_METADATA;
  payload: any;
};

export type SetSearchedExamplesDataType = {
  type: typeof SET_SEARCHED_EXAMPLES_DATA;
  payload: any;
};

export type ResetSearchedExamplesDataType = {
  type: typeof RESET_SEARCHED_EXAMPLES_DATA;
  payload: any;
};

export type CreateExampleDataType = {
  type: typeof CREATE_EXAMPLE_DATA;
  payload: any;
};

export type RemoveExampleDataType = {
  type: typeof REMOVE_EXAMPLE_DATA;
  payload: any;
};

export type UpdateExampleDataType = {
  type: typeof UPDATE_EXAMPLE_DATA;
  payload: any;
};

export type ExampleActionTypes =
  | SetIsLoadingType
  | SetIsSubmittingType
  | SetExampleDataType
  | SetExamplesDataType
  | SetExamplesMetadataType
  | SetSearchedExamplesDataType
  | ResetSearchedExamplesDataType
  | CreateExampleDataType
  | RemoveExampleDataType
  | UpdateExampleDataType;
