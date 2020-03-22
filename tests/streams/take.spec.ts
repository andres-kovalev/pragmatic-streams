import { expect } from 'chai';
import { spy } from 'sinon';

import { take } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

describe('take', () => {
    it('should return iterable object', () => {
        expect([ ...take(5, source) ]).to.be.eql([ 0, 1, 2, 3, 4 ]);
    });

    it('should support partial application', () => {
        const take5 = take(5);

        expect([ ...take5(source) ]).to.be.eql([ 0, 1, 2, 3, 4 ]);
    });

    it('should not get redundant values from iterable', () => {
        const generatorSpy = spy((() => {
            let index = 0;

            return () => index++;
        })());
        function* generator() {
            while (true) {
                yield generatorSpy();
            }
        }

        // eslint-disable-next-line no-unused-expressions
        [ ...take(5, generator()) ];

        expect(generatorSpy).to.have.been.callCount(5);
    });
});
