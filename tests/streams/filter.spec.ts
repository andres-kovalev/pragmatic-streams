import { expect } from 'chai';
import { spy } from 'sinon';

import { filter } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const isOdd = (value: number) => value % 2 === 1;

describe('filter', () => {
    it('should return iterable object', () => {
        expect([ ...filter(isOdd, source) ]).to.be.eql([ 1, 3, 5, 7, 9 ]);
    });

    it('should lazily call filter function', () => {
        const filterFunction = spy(isOdd);

        const iterable = filter(filterFunction, source);

        // eslint-disable-next-line no-unused-expressions
        expect(filterFunction).to.not.have.been.called;

        iterable[Symbol.iterator]().next();

        // eslint-disable-next-line no-unused-expressions
        expect(filterFunction).to.have.been.calledTwice;
    });

    it('should support partial application', () => {
        const filterOdd = filter(isOdd);

        expect([ ...filterOdd(source) ]).to.be.eql([ 1, 3, 5, 7, 9 ]);
    });
});
