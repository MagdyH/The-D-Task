import React from 'react';
import renderer from 'react-test-renderer';
import GameCard from '../components/gameCard';


describe('GameCard component', () => {
    it('should render snapshot', () => {
      const component = renderer.create(<GameCard />);
  
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

});