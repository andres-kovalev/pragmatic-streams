import curriedGenerator, { CurriedGenerator } from './generator';

/**
 * Predicate
 */
type PredicateFunction<T> =
/**
 * @param item item to check
 * @param index item index in stream
 * @returns defines whether item should stay or be filtered out
 */
(item: T, index: number) => boolean;

/**
 * TakeWhile function (creates slice of a steam)
 */
type TakeWhile<T> =
/**
 * @param iterable input stream
 * @returns output filtered stream
 */
(iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
/**
 * Function to take items from input stream while predicate returns true
 * @param predicate filter predicate
 * @returns filter function
 */
export default function takeWhile<T>(filterFn: PredicateFunction<T>): TakeWhile<T>;

/**
 * Function to take items from input stream while predicate returns true
 * @param predicate filter predicate
 * @param iterable input stream
 * @returns output filtered stream
 */
export default function takeWhile<T>(
    predicate: PredicateFunction<T>,
    iterable: Iterable<T>
): IterableIterator<T>;

export default function takeWhile<T>(
    ...args: [ PredicateFunction<T> ] | [ PredicateFunction<T>, Iterable<T> ]
): TakeWhile<T> | IterableIterator<T> {
    return (<CurriedGenerator<T>>curriedGenerator)(...args);
}
/* eslint-enable import/export */
