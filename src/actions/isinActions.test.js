import expect from 'expect';
import * as isinActions from './isinActions';


describe ('Test ISIS searching', () => {
  it('returns correct result when search without included 0s', () => {
    
    expect(isinActions.RemoveCharactersFromIsin('AT000000STR1','AT0ST')).toEqual('AT0STR1');
    
    expect(isinActions.RemoveCharactersFromIsin('AT000000STR1','AT00ST')).toBe('AT00STR1');

    expect(isinActions.RemoveCharactersFromIsin('AT000000STR1','AT000')).toBe('ATR1');

  });
});

