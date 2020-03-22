import curriedGenerator from './generator';

/**
 * Skip function (creates slice of a stream)
 */
type Skip<T> =
/**
 * @param iterable input stream
 * @returns output sliced stream
 */
(iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
/**
 * Function to created slice of a stream (substream)
 * skips first N items from input stream and returns the rest
 * @param amount number of items to skip
 * @return skip function to slice stream
 */
export default function skip<T>(amount: number): Skip<T>;

/**
 * Function to created slice of a stream (substream)
 * skips first N items from input stream and returns the rest
 * @param amount number of items to skip
 * @param iterable input stream
 * @return output sliced stream
 */
export default function skip<T>(amount: number, iterable: Iterable<T>): IterableIterator<T>;

export default function skip<T>(...args: any[]): Skip<T> | IterableIterator<T> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
