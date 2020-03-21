import { expect } from 'chai';
import { spy } from 'sinon';

import { create } from '../../src';

const identity = <T>(value: T) => value;

describe('create', () => {
    it('should return iterable object', () => {
        expect([ ...create(identity, 10) ]).to.be.eql([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
    });

    it('should lazily call creator function', () => {
        const creatorFunction = spy(identity);

        const iterable = create(creatorFunction, 10);

        // eslint-disable-next-line no-unused-expressions
        expect(creatorFunction).to.not.have.been.called;

        iterable[Symbol.iterator]().next();

        // eslint-disable-next-line no-unused-expressions
        expect(creatorFunction).to.have.been.calledOnce;
    });

    it('should support partial application', () => {
        const digits = create(identity);

        expect([ ...digits(10) ]).to.be.eql([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
    });
});
