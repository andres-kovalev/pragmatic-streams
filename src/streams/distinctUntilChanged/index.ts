import curriedGenerator, { CurriedGenerator } from './generator';

/**
 * Compare function (compares two items)
 */
type CompareFunction<T> =
/**
 * @param item1 first item
 * @param item2 second item
 * @return true if items are equal
 */
(item1: T, item2: T) => boolean;

/**
 * Distinct function (returns new stream with distinct items)
 */
type DistinctUntilChanged<T> =
/**
 * @param iterable input stream
 * @returns output stream
 */
(iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
/**
 * Function to create new stream where items are distinct until changed
 * @param compareFn function to compare two items
 * @returns distinct function to transform stream
 */
export default function distinctUntilChanged<T>(
    compareFn: CompareFunction<T>
): DistinctUntilChanged<T>;

/**
 * Function to create new stream where items are distinct until changed
 * @param compareFn function to compare two items
 * @param iterable input stream
 * @returns output stream
 */
export default function distinctUntilChanged<T>(
    compareFn: CompareFunction<T>,
    iterable: Iterable<T>
): IterableIterator<T>;

export default function distinctUntilChanged<T>(
    ...args: [ CompareFunction<T> ] | [ CompareFunction<T>, Iterable<T> ]
): DistinctUntilChanged<T> | IterableIterator<T> {
    return (<CurriedGenerator<T>>curriedGenerator)(...args);
}
/* eslint-enable import/export */
