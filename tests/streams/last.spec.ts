import { expect } from 'chai';

import { last } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

describe('last', () => {
    it('should return iterable object', () => {
        expect([ ...last(3, source) ]).to.be.eql([ 7, 8, 9 ]);
    });

    it('should support partial application', () => {
        const last3 = last(3);

        expect([ ...last3(source) ]).to.be.eql([ 7, 8, 9 ]);
    });
});
