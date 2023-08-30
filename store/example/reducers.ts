import { Reducer } from 'redux';

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

import { ExampleActionTypes, ExampleState } from './types';

import { createState, removeState, updateState } from 'store/utils';

export const initialState: ExampleState = {
  isLoading: false,
  isSubmitting: false,

  example: undefined,
  examples: [],

  searchedExamples: [],

  metadata: undefined,
};

const reducer: Reducer<ExampleState> = (
  state = initialState,
  action: ExampleActionTypes,
): ExampleState => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case SET_IS_SUBMITTING:
      return { ...state, isSubmitting: action.payload };

    case SET_EXAMPLE_DATA:
      return { ...state, example: action.payload };

    case SET_EXAMPLES_DATA:
      return { ...state, examples: action.payload };

    case SET_EXAMPLES_METADATA:
      return { ...state, metadata: action.payload };

    case SET_SEARCHED_EXAMPLES_DATA:
      return { ...state, searchedExamples: action.payload };

    case RESET_SEARCHED_EXAMPLES_DATA:
      return { ...state, searchedExamples: undefined };

    case CREATE_EXAMPLE_DATA:
      return createState({
        state,
        action,
        local: state.examples,
        entity: 'examples',
      });

    case UPDATE_EXAMPLE_DATA:
      return updateState({
        state,
        action,
        local: state.examples,
        entity: 'examples',
      });

    case REMOVE_EXAMPLE_DATA:
      return removeState({
        state,
        action,
        local: state.examples,
        entity: 'examples',
      });

    default:
      return state;
  }
};

export default reducer;
