import { expect } from 'chai';
import { spy } from 'sinon';

import { scan } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const add = (sum: number, item: number) => sum + item;

describe('scan', () => {
    it('should return iterable object', () => {
        expect([ ...scan(add, source) ]).to.be.eql([ 0, 1, 3, 6, 10, 15, 21, 28, 36, 45 ]);
    });

    it('should support partial application', () => {
        const sum = scan(add);

        expect([ ...sum(source) ]).to.be.eql([ 0, 1, 3, 6, 10, 15, 21, 28, 36, 45 ]);
    });

    it('should not call reducer for first item in a stream', () => {
        const reducerSpy = spy(add);

        const iterable = scan(reducerSpy, source);
        const iterator = iterable[Symbol.iterator]();
        const { value } = iterator.next();

        expect(value).to.equal(0);
        // eslint-disable-next-line no-unused-expressions
        expect(reducerSpy).to.not.have.been.called;
    });
});
