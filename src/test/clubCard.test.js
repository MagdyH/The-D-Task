import React from 'react';
import renderer from 'react-test-renderer';
import ClubCard from '../components/clubCard';


describe('ClubCard component', () => {
    it('should render snapshot', () => {
      const component = renderer.create(<ClubCard />);
  
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

});