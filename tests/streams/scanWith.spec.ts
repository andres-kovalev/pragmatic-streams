import { expect } from 'chai';
import { spy } from 'sinon';

import { scanWith } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const add = (sum: number, item: number) => sum + item;

describe('scanWith', () => {
    it('should return iterable object', () => {
        expect([ ...scanWith(add, 10, source) ]).to.be.eql(
            [ 10, 11, 13, 16, 20, 25, 31, 38, 46, 55 ]
        );
    });

    it('should support partial application', () => {
        const sum = scanWith(add, 10);

        expect([ ...sum(source) ]).to.be.eql([ 10, 11, 13, 16, 20, 25, 31, 38, 46, 55 ]);
    });

    it('should call reducer for first item in a stream', () => {
        const reducerSpy = spy(add);

        const iterable = scanWith(reducerSpy, 10, [ 1 ]);
        const iterator = iterable[Symbol.iterator]();
        const { value } = iterator.next();

        expect(value).to.be.eql(11);
        // eslint-disable-next-line no-unused-expressions
        expect(reducerSpy).to.have.been.calledOnce;
    });
});
