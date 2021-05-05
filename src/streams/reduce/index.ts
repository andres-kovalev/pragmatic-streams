import curriedFunction, { CurriedFunction } from './function';

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
 * Reduce function (reduces stream to single value)
 */
type Reduce<T> =
/**
 * @param iterable input stream
 * @returns accumulation result
 */
(iterable: Iterable<T>) => T;

/* eslint-disable import/export */
/**
 * Function to execute a reducer function on each element of the stream,
 * resulting in a single output value
 * @param reducer function to reduce stream to a single value
 * @returns reduce function
 */
export default function reduce<T>(reducer: ReducerFunction<T>): Reduce<T>;

/**
 * Function to execute a reducer function on each element of the stream,
 * resulting in a single output value
 * @param reducer function to reduce stream to a single value
 * @param iterable input stream
 * @returns accumulation result
 */
export default function reduce<T>(reducer: ReducerFunction<T>, iterable: Iterable<T>): T;

export default function reduce<T>(
    ...args: [ ReducerFunction<T> ] | [ ReducerFunction<T>, Iterable<T> ]
): Reduce<T> | T {
    return (<CurriedFunction<T>>curriedFunction)(...args);
}
/* eslint-enable import/export */
