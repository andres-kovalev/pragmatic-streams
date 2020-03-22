import { expect } from 'chai';
import { spy } from 'sinon';

import { distinctUntilChanged } from '../../src';

const numberSource = [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 4 ];

const object1 = { id: 1 };
const object2 = { ...object1 };
const objectSource = [ object1, object2 ];

function strictEqual<T>(a: T, b: T): boolean {
    return a === b;
}

function compareById<I, T extends { id: I }>({ id: id1 }: T, { id: id2 }: T): boolean {
    return id1 === id2;
}

describe('distinctUntilChanged', () => {
    it('should return iterable object', () => {
        expect([
            ...distinctUntilChanged(strictEqual, numberSource)
        ]).to.be.eql([ 0, 1, 2, 3, 4, 5, 4 ]);
    });

    it('should support custom equality function', () => {
        expect([ ...distinctUntilChanged(compareById, objectSource) ]).to.be.eql([ object1 ]);
    });

    it('should lazily call equality function', () => {
        const equalityFunction = spy(strictEqual);

        const iterable = distinctUntilChanged(equalityFunction, numberSource);

        // eslint-disable-next-line no-unused-expressions
        expect(equalityFunction).to.not.have.been.called;

        iterable[Symbol.iterator]().next();

        // eslint-disable-next-line no-unused-expressions
        expect(equalityFunction).to.have.been.calledOnce;
    });

    it('should support partial application', () => {
        const distinctUntilChangedById = distinctUntilChanged(compareById);

        expect([ ...distinctUntilChangedById(objectSource) ]).to.be.eql([ object1 ]);
    });
});
