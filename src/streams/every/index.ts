import curriedFunction, { CurriedFunction } from './function';

/**
 * Predicate function
 */
type Predicate<T> =
/**
 * @param item next item
 * @param index item index in stream
 * @return predicate result
 */
(item: T, index: number) => boolean;

/**
 * Every function (returns true when every item fits predicate)
 */
type Every<T> =
/**
 * @param iterable input stream
 * @returns true if every element in the stream pass the test
 */
(iterable: Iterable<T>) => boolean;

/* eslint-disable import/export */
/**
 * Function to test whether all elements in the stream pass the test implemented in predicate
 * @param predicate predicate function
 * @returns every function
 */
export default function every<T>(predicate: Predicate<T>): Every<T>;

/**
 * Function to test whether all elements in the array pass the test implemented in predicate
 * @param predicate predicate function
 * @param iterable input stream
 * @returns true if every element in the stream pass the test
 */
export default function every<T>(predicate: Predicate<T>, iterable: Iterable<T>): boolean;

export default function every<T>(
    ...args: [ Predicate<T> ] | [ Predicate<T>, Iterable<T> ]
): Every<T> | boolean {
    return (<CurriedFunction<T>>curriedFunction)(...args);
}
/* eslint-enable import/export */
