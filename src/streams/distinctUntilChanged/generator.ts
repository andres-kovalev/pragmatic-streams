import curry, { Curried } from '../../utility/curry';

const EMPTY = Symbol('_empty_');

export type CurriedGenerator<T> = Curried<
    (compareFn: (a: T, b: T) => boolean, iterable: Iterable<T>) => IterableIterator<T>
>;

export default curry(
    function* distinctUntilChanged<T extends any>(
        compareFn: (a: T, b: T) => boolean,
        iterable: Iterable<T>
    ): IterableIterator<T> {
        let lastItem: T | Symbol = EMPTY;

        for (const item of iterable) {
            if (lastItem === EMPTY || !compareFn(item, lastItem as T)) {
                yield item;

                lastItem = item;
            }
        }
    }
);
