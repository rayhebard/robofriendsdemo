import * as actions from "./actions";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants.js'

import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleWare])

describe('actions', () => {
  it('should create an action to search robots', () => {
    const text = "wooo";
    const expectedAction = {
      type:CHANGE_SEARCH_FIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });

  it('handles requestion robots API', () => {
    const store = mockStore()
    store.dispatch(actions.requestRobots())
    const action  = store.getActions();
    const expectedAction = {
      type:REQUEST_ROBOTS_PENDING
    };
    
    expect(action[0]).toEqual(expectedAction);
  });


});
