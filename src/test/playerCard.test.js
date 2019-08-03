import React from 'react';
import renderer from 'react-test-renderer';
import PlayerCard from '../components/playerCard';


describe('PlayerCard component', () => {
    it('should render snapshot', () => {
      const component = renderer.create(<PlayerCard />);
  
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

});