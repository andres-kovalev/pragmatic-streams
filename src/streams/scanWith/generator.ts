import curry, { Curried } from '../../utility/curry';

export type CurriedFunction<S, D> = Curried<
    (
        reducer: (reduced: D, item: S, index: number) => D,
        initial: D, iterable: Iterable<S>
    ) => IterableIterator<D>
>;

export default curry(
    function* scanWith<S extends any, D extends any>(
        reducer: (reduced: D, item: S, index: number) => D,
        initial: D,
        iterable: Iterable<S>
    ): IterableIterator<D> {
        let index = 0;
        let reduced = initial;

        for (const item of iterable) {
            reduced = reducer(reduced, item, index++);
            yield reduced;
        }
    }
);
