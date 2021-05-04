import curry, { Curried } from '../../utility/curry';
import scan from '../scan';
import last from '../last';

export type CurriedFunction<T> = Curried<
    (reducer: (reduced: T, item: T, index: number) => T, iterable: Iterable<T>) => T
>;

export default curry(
    function reduce<T>(
        reducer: (reduced: T, item: T, index: number) => T,
        iterable: Iterable<T>
    ): T {
        for (const item of last(1, scan(reducer, iterable))) {
            return item;
        }

        throw new TypeError('Reduce of empty iterable with no initial value');
    }
);
