import { expect } from 'chai';
import { spy } from 'sinon';

import { some } from '../../src';

const source = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const isOdd = (value: number) => value % 2 === 1;
const greaterThan10 = (value: number) => value > 10;

describe('some', () => {
    it('should return boolean', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(some(isOdd, source)).to.be.true;
        // eslint-disable-next-line no-unused-expressions
        expect(some(greaterThan10, source)).to.be.false;
    });

    it('should call predicate as few time as needed', () => {
        const predicateFunction = spy(isOdd);

        // eslint-disable-next-line no-unused-expressions
        expect(predicateFunction).to.not.have.been.called;

        some(predicateFunction, source);

        // eslint-disable-next-line no-unused-expressions
        expect(predicateFunction).to.have.been.calledOnce;
    });

    it('should support partial application', () => {
        const someIsOdd = some(isOdd);

        // eslint-disable-next-line no-unused-expressions
        expect(someIsOdd(source)).to.be.true;
    });
});
