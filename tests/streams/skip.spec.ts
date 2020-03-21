import { expect } from 'chai';

import { skip } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

describe('skip', () => {
    it('should return iterable object', () => {
        expect([ ...skip(4, source) ]).to.be.eql([ 4, 5, 6, 7, 8, 9 ]);
    });

    it('should support partial application', () => {
        const skip4 = skip(4);

        expect([ ...skip4(source) ]).to.be.eql([ 4, 5, 6, 7, 8, 9 ]);
    });
});
