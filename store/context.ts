import { Store } from 'redux';
import { AppState } from './reducer';

export interface Context {
  reduxStore: Store<AppState>;
}
