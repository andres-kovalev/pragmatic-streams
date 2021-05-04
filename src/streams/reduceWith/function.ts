import curry, { Curried } from '../../utility/curry';
import scanWith from '../scanWith';
import last from '../last';

export type CurriedFunction<S, D> = Curried<
    (reducer: (reduced: D, item: S, index: number) => D, initial: D, iterable: Iterable<S>) => D
>;

export default curry(
    function reduceWith<S, D>(
        reducer: (reduced: D, item: S, index: number) => D,
        initial: D,
        iterable: Iterable<S>
    ): D {
        for (const item of last(1, scanWith(reducer, initial, iterable))) {
            return item;
        }

        return initial;
    }
);
