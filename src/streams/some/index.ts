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
 * Some function (returns true when any item fits predicate)
 */
type Some<T> =
/**
 * @param iterable input stream
 * @returns true if any element in the stream pass the test
 */
(iterable: Iterable<T>) => boolean;

/* eslint-disable import/export */
/**
 * Function to test whether at least one element in the stream passes the test
 * implemented in predicate
 * @param predicate predicate function
 * @returns some function
 */
export default function some<T>(predicate: Predicate<T>): Some<T>;

/**
 * Function to test whether at least one element in the stream passes the test
 * implemented in predicate
 * @param predicate predicate function
 * @param iterable input stream
 * @returns true if any element in the stream pass the test
 */
export default function some<T>(predicate: Predicate<T>, iterable: Iterable<T>): boolean;

export default function some<T>(
    ...args: [ Predicate<T> ] | [ Predicate<T>, Iterable<T> ]
): Some<T> | boolean {
    return (<CurriedFunction<T>>curriedFunction)(...args);
}
/* eslint-enable import/export */
