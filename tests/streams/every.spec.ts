import { expect } from 'chai';
import { spy } from 'sinon';

import { every } from '../../src';

const source = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const isOdd = (value: number) => value % 2 === 1;
const lessThan10 = (value: number) => value < 10;

describe('every', () => {
    it('should return boolean', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(every(isOdd, source)).to.be.false;
        // eslint-disable-next-line no-unused-expressions
        expect(every(lessThan10, source)).to.be.true;
    });

    it('should call predicate as few time as needed', () => {
        const predicateFunction = spy(isOdd);

        // eslint-disable-next-line no-unused-expressions
        expect(predicateFunction).to.not.have.been.called;

        every(predicateFunction, source);

        // eslint-disable-next-line no-unused-expressions
        expect(predicateFunction).to.have.been.calledTwice;
    });

    it('should support partial application', () => {
        const everyIsOdd = every(isOdd);

        // eslint-disable-next-line no-unused-expressions
        expect(everyIsOdd(source)).to.be.false;
    });
});
