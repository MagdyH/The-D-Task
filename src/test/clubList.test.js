import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import {ClubList as Clubs} from '../routes/club/clubList';


describe('ClubList component', () => {
    it('should render snapshot', () => {
      const component = renderer.create(<Clubs />);
  
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

});