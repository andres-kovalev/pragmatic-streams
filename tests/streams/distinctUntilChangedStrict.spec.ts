import { expect } from 'chai';

import { distinctUntilChangedStrict } from '../../src';

const source = [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 4 ];

describe('distinctUntilChangedStrict', () => {
    it('should return iterable object', () => {
        expect([ ...distinctUntilChangedStrict(source) ]).to.be.eql([ 0, 1, 2, 3, 4, 5, 4 ]);
    });
});
