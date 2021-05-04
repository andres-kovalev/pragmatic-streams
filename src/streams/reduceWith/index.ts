import curriedFunction, { CurriedFunction } from './function';

/**
 * Reducer function to accumulate value
 */
type ReducerFunction<S, D> =
/**
 * @param reduced accumulator
 * @param item item to accumulate
 * @param index item index in stream
 * @return accumulation result
 */
(reduced: D, item: S, index: number) => D;

/**
 * Reduce function (reduces stream to single value)
 */
type ReduceWith<S, D> =
/**
 * @param iterable input stream
 * @returns accumulation result
 */
(iterable: Iterable<S>) => D;

/* eslint-disable import/export */
/**
 * Function to execute a reducer function on each element of the stream,
 * resulting in a single output value
 * @param reducer function to reduce stream to a single value
 * @param initial initial accumulated result
 * @returns reduce function
 */
export default function reduceWith<S, D>(
    reducer: ReducerFunction<S, D>, initial: D
): ReduceWith<S, D>;

/**
 * Function to execute a reducer function on each element of the stream,
 * resulting in a single output value
 * @param reducer function to reduce stream to a single value
 * @param initial initial accumulated result
 * @param iterable input stream
 * @returns accumulation result
 */
export default function reduceWith<S, D>(
    reducer: ReducerFunction<S, D>, initial: D, iterable: Iterable<S>
): D;

export default function reduceWith<S, D>(
    ...args: [ ReducerFunction<S, D>, D ] | [ ReducerFunction<S, D>, D, Iterable<S> ]
): ReduceWith<S, D> | D {
    return (<CurriedFunction<S, D>>curriedFunction)(...args);
}
/* eslint-enable import/export */
