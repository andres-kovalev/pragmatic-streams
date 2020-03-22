import curry from '../../utility/curry';

const EMPTY = Symbol('_empty_');

export default curry(
    function* distinctUntilChanged<T extends any>(
        areEqual: (a: T, b: T) => boolean,
        iterable: Iterable<T>
    ): IterableIterator<T> {
        let lastItem: T | Symbol = EMPTY;

        for (const item of iterable) {
            if (!areEqual(item, lastItem as T)) {
                yield item;

                lastItem = item;
            }
        }
    }
);
