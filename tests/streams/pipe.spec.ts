import { expect } from 'chai';
import { spy } from 'sinon';

import { filter, map, pipe } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const add1 = (value: number) => value + 1;
const isOdd = (value: number) => value % 2 === 1;

describe('pipe', () => {
    it('should return iterable object', () => {
        expect([ ...pipe(filter(isOdd), map(add1))(source) ]).to.be.eql([ 2, 4, 6, 8, 10 ]);
    });

    it('should lazily call piped functions', () => {
        const filterFunction = spy(isOdd);
        const mapFunction = spy(add1);

        const iterable = pipe(filter(filterFunction), map(mapFunction))(source);

        // eslint-disable-next-line no-unused-expressions
        expect(filterFunction).to.not.have.been.called;
        // eslint-disable-next-line no-unused-expressions
        expect(mapFunction).to.not.have.been.called;

        iterable[Symbol.iterator]().next();

        // eslint-disable-next-line no-unused-expressions
        expect(filterFunction).to.have.been.calledTwice;
        // eslint-disable-next-line no-unused-expressions
        expect(mapFunction).to.have.been.calledOnce;
    });
});
