import curriedGenerator from './generator';

/**
 * Last function (creates slice of a stream)
 */
type Last<T> =
/**
 * @param iterable input stream
 * @returns output sliced stream
 */
(iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
/**
 * Function to created slice of a stream (substream)
 * takes last N items from input stream
 * @param amount number of items to take
 * @return last function to slice stream
 */
export default function last<T>(amount: number): Last<T>;

/**
 * Function to created slice of a stream (substream)
 * takes last N items from input stream
 * @param amount number of items to take
 * @param iterable input stream
 * @return output sliced stream
 */
export default function last<T>(amount: number, iterable: Iterable<T>): IterableIterator<T>;

export default function last<T>(...args: any[]): Last<T> | IterableIterator<T> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
