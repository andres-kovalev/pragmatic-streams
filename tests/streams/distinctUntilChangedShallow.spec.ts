import { expect } from 'chai';

import { distinctUntilChangedShallow } from '../../src';

const source = [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 4 ];

describe('distinctUntilChangedShallow', () => {
    it('should return iterable object', () => {
        expect([ ...distinctUntilChangedShallow(source) ]).to.be.eql([ 0, 1, 2, 3, 4, 5, 4 ]);
    });

    it('should compare items using shallow comparison', () => {
        const object1 = { a: 1, b: 2 };
        const object2 = { ...object1 };
        const object3 = { a: 1 };

        const input = [ object1, object2, object3 ];

        expect([ ...distinctUntilChangedShallow(input) ]).to.be.eql([ object1, object3 ]);
    });
});
