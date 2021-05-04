import { expect } from 'chai';
import { spy } from 'sinon';

import { reduce } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const add = (sum: number, item: number) => sum + item;

describe('reduce', () => {
    it('should return single value', () => {
        expect(reduce(add, source)).to.be.equal(45);
    });

    it('should support partial application', () => {
        const sum = reduce(add);

        expect(sum(source)).to.be.equal(45);
    });

    it('should throw an error when the input stream is empty', () => {
        expect(() => reduce(add, [])).to.throw();
    });

    it('should not call reducer for first item in a stream', () => {
        const reducerSpy = spy(add);

        const value = reduce(reducerSpy, [ 1 ]);

        expect(value).to.equal(1);
        // eslint-disable-next-line no-unused-expressions
        expect(reducerSpy).to.not.have.been.called;
    });
});
