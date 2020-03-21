import { expect } from 'chai';
import { spy } from 'sinon';

import { map } from '../../src';

const source = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const add10 = (value: number) => value + 10;

describe('map', () => {
    it('should return iterable object', () => {
        expect([ ...map(add10, source) ]).to.be.eql([ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]);
    });

    it('should lazily call map function', () => {
        const mapFunction = spy(add10);

        const iterable = map(mapFunction, source);

        // eslint-disable-next-line no-unused-expressions
        expect(mapFunction).to.not.have.been.called;

        iterable[Symbol.iterator]().next();

        // eslint-disable-next-line no-unused-expressions
        expect(mapFunction).to.have.been.calledOnce;
    });

    it('should support partial application', () => {
        const add10to = map(add10);

        expect([ ...add10to(source) ]).to.be.eql([ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]);
    });
});
