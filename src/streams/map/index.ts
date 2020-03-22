import curriedGenerator from './generator';

/**
 * Function to transform item of a stream
 */
type MapFunction<S, D> =
/**
 * @param item item to transform
 * @param index item index in stream
 * @return transformed item
 */
(item: S, index: number) => D;

/**
 * Map function (creates transformed stream)
 */
type Map<S, D> =
/**
 * @param iterable input stream
 * @returns output transformed stream
 */
(iterable: Iterable<S>) => IterableIterator<D>;

/* eslint-disable import/export */
/**
 * Function to create transformed stream
 * @param mapFn function to transform item
 * @returns map function to transform stream
 */
export default function map<S, D>(mapFn: MapFunction<S, D>): Map<S, D>;

/**
 * Function to create transformed stream
 * @param mapFn function to transform item
 * @param iterable input stream
 * @returns output transformed stream
 */
export default function map<S, D>(
    mapFn: MapFunction<S, D>,
    iterable: Iterable<S>
): IterableIterator<D>;

export default function map<S, D>(...args: any[]): Map<S, D> | IterableIterator<D> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
