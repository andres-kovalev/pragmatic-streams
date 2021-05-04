import curriedFunction, { CurriedFunction } from './generator';

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
 * Scan function (reduces stream and emits intermediate accumulated results)
 */
type ScanWith<S, D> =
/**
 * @param iterable input stream
 * @returns stream of intermediate accumulated results
 */
(iterable: Iterable<S>) => IterableIterator<D>;

/* eslint-disable import/export */
/**
 * Function to execute a reducer function on each element of the stream
 * and emit each intermediate accumulated result
 * @param reducer function to reduce stream to a single value
 * @param initial initial accumulated result
 * @returns stream of intermediate accumulated results
 */
export default function scanWith<S, D>(reducer: ReducerFunction<S, D>, initial: D): ScanWith<S, D>;

/**
 * Function to execute a reducer function on each element of the stream
 * and emit each intermediate accumulated result
 * @param reducer function to reduce stream to a single value
 * @param iterable input stream
 * @param initial initial accumulated result
 * @returns stream of intermediate accumulated results
 */
export default function scanWith<S, D>(
    reducer: ReducerFunction<S, D>, initial: D, iterable: Iterable<S>
): IterableIterator<D>;

export default function scanWith<S, D>(
    ...args: [ ReducerFunction<S, D>, D ] | [ ReducerFunction<S, D>, D, Iterable<S> ]
): ScanWith<S, D> | IterableIterator<D> {
    return (<CurriedFunction<S, D>>curriedFunction)(...args);
}
/* eslint-enable import/export */
