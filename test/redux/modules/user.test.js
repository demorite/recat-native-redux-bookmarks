import reducer, { defaultState } from 'redux/modules/user';
import deepFreeze from 'deep-freeze';

describe('(Redux) user', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
