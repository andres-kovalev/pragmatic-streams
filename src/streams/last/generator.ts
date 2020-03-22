import curry from '../../utility/curry';

export default curry(
    function* last<T extends any>(amount: number, iterable: Iterable<T>): IterableIterator<T> {
        yield* [ ...iterable ].slice(-amount);
    }
);
