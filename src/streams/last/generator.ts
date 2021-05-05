import curry, { Curried } from '../../utility/curry';

export type CurriedGenerator<T> = Curried<
    (amount: number, iterable: Iterable<T>) => IterableIterator<T>
>;

export default curry(
    function* last<T extends any>(amount: number, iterable: Iterable<T>): IterableIterator<T> {
        yield* [ ...iterable ].slice(-amount);
    }
);
