import { expect } from 'chai';
import { spy } from 'sinon';

import { reduceWith } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const unshift = (array: number[], item: number) => [ item, ...array ];

describe('reduceWith', () => {
    it('should return single value', () => {
        expect(reduceWith(unshift, [], source)).to.be.eql([ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]);
    });

    it('should support partial application', () => {
        const reverse = reduceWith(unshift, []);

        expect(reverse(source)).to.be.eql([ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]);
    });

    it('should not throw an error when the input stream is empty', () => {
        expect(() => reduceWith(unshift, [], [])).not.to.throw();
    });

    it('should call reducer for first item in a stream', () => {
        const reducerSpy = spy(unshift);

        const value = reduceWith(reducerSpy, [], [ 1 ]);

        expect(value).to.be.eql([ 1 ]);
        // eslint-disable-next-line no-unused-expressions
        expect(reducerSpy).to.have.been.calledOnce;
    });
});
