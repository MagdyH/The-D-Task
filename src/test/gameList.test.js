import React from 'react';
import renderer from 'react-test-renderer';
import {GameList as Games} from '../routes/game/gameList';


describe('GameList component', () => {
    it('should render snapshot', () => {
      const component = renderer.create(<Games />);
  
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

});