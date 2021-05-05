import { expect } from 'chai';
import { spy } from 'sinon';

import { takeWhile } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const not5 = (item: number) => item !== 5;

describe('takeWhile', () => {
    it('should return iterable object', () => {
        expect([ ...takeWhile(not5, source) ]).to.be.eql([ 0, 1, 2, 3, 4 ]);
    });

    it('should support partial application', () => {
        const takeTill5 = takeWhile(not5);

        expect([ ...takeTill5(source) ]).to.be.eql([ 0, 1, 2, 3, 4 ]);
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
        [ ...takeWhile(not5, generator()) ];

        expect(generatorSpy).to.have.been.callCount(6);
    });
});
