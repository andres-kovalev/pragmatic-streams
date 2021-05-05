import curriedGenerator, { CurriedGenerator } from './generator';

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
 * Function to create slice of a stream (substream)
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

export default function last<T>(
    ...args: [ number ] | [ number, Iterable<T> ]
): Last<T> | IterableIterator<T> {
    return (<CurriedGenerator<T>>curriedGenerator)(...args);
}
/* eslint-enable import/export */
