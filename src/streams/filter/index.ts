import curriedGenerator, { CurriedGenerator } from './generator';

/**
 * Filter predicate
 */
type FilterFunction<T> =
/**
 * @param item item to filter
 * @param index item index in stream
 * @returns defines whether item should stay or be filtered out
 */
(item: T, index: number) => boolean;

/**
 * Filter function (creates filtered stream)
 */
type Filter<T> =
/**
 * @param iterable input stream
 * @returns output filtered stream
 */
(iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
/**
 * Function to create filtered stream
 * @param filterFn filter predicate
 * @returns filter function
 */
export default function filter<T>(filterFn: FilterFunction<T>): Filter<T>;

/**
 * Function to create filtered stream
 * @param filterFn filter predicate
 * @param iterable input stream
 * @returns output filtered stream
 */
export default function filter<T>(
    filterFn: FilterFunction<T>,
    iterable: Iterable<T>
): IterableIterator<T>;

export default function filter<T>(
    ...args: [ FilterFunction<T> ] | [ FilterFunction<T>, Iterable<T> ]
): Filter<T> | IterableIterator<T> {
    return (<CurriedGenerator<T>>curriedGenerator)(...args);
}
/* eslint-enable import/export */
