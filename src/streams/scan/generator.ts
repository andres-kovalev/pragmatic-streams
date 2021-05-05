import curry, { Curried } from '../../utility/curry';

export type CurriedFunction<T> = Curried<
    (
        reducer: (reduced: T, item: T, index: number) => T,
        iterable: Iterable<T>
    ) => IterableIterator<T>
>;

export default curry(
    function* scan<T extends any>(
        reducer: (reduced: T, item: T, index: number) => T,
        iterable: Iterable<T>
    ): IterableIterator<T> {
        let index = 0;
        let reduced: T;

        for (const item of iterable) {
            if (index === 0) {
                reduced = item;
            } else {
                reduced = reducer(reduced!, item, index);
            }

            yield reduced;
            index++;
        }
    }
);
