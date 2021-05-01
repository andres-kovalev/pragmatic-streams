import curry, { Curried } from '../../utility/curry';

export type CurriedGenerator<S, D> = Curried<
    (mapFn: (item: S, index: number) => D, iterable: Iterable<S>) => IterableIterator<D>
>;

export default curry(
    function* map<S extends any, D extends any>(
        mapFn: (item: S, index: number) => D,
        iterable: Iterable<S>
    ): IterableIterator<D> {
        let index = 0;

        for (const item of iterable) {
            yield mapFn(item, index);

            index++;
        }
    }
);
