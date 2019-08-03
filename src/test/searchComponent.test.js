import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../components/searchComponent';
import configureStore from 'redux-mock-store';

const initialState = {}
const mockStore = configureStore();
const store = mockStore(initialState);

describe('Search component', () => {
    it('should render snapshot', () => {
      const component = renderer.create(<Search store={store} />);
  
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

});