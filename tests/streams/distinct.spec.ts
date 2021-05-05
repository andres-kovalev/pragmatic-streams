import { expect } from 'chai';

import { distinct } from '../../src';

const source = [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 4 ];

describe('distinct', () => {
    it('should return iterable object', () => {
        expect([ ...distinct(source) ]).to.be.eql([ 0, 1, 2, 3, 4, 5, 4 ]);
    });
});
