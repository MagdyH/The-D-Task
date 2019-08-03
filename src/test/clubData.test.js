import React from 'react';
import renderer from 'react-test-renderer';
import {ClubData as Club} from '../routes/club/clubData';


describe('ClubData component', () => {
    it('should render snapshot', () => {
      const component = renderer.create(<Club />);
  
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

});