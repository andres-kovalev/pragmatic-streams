import curriedFunction, { CurriedFunction } from './generator';

/**
 * Reducer function to accumulate value
 */
type ReducerFunction<T> =
/**
 * @param reduced accumulator
 * @param item item to accumulate
 * @param index item index in stream
 * @return accumulation result
 */
(reduced: T, item: T, index: number) => T;

/**
 * Scan function (reduces stream and emits intermediate accumulated results)
 */
type Scan<T> =
/**
 * @param iterable input stream
 * @returns stream of intermediate accumulated results
 */
(iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
/**
 * Function to execute a reducer function on each element of the stream
 * and emit each intermediate accumulated result
 * @param reducer function to reduce stream to a single value
 * @returns stream of intermediate accumulated results
 */
export default function scan<T>(reducer: ReducerFunction<T>): Scan<T>;

/**
 * Function to execute a reducer function on each element of the stream
 * and emit each intermediate accumulated result
 * @param reducer function to reduce stream to a single value
 * @param iterable input stream
 * @returns stream of intermediate accumulated results
 */
export default function scan<T>(
    reducer: ReducerFunction<T>, iterable: Iterable<T>
): IterableIterator<T>;

export default function scan<T>(
    ...args: [ ReducerFunction<T> ] | [ ReducerFunction<T>, Iterable<T> ]
): Scan<T> | IterableIterator<T> {
    return (<CurriedFunction<T>>curriedFunction)(...args);
}
/* eslint-enable import/export */
