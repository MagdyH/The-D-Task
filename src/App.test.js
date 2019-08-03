import React from 'react';
import renderer from 'react-test-renderer';
import APP from './App';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const initialState = {}
const mockStore = configureStore();
const store = mockStore(initialState);


it('should render snapshot', () => {
  const component = renderer.create(<Provider store={store}><APP /> </Provider>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
