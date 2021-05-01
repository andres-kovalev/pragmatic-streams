import curriedGenerator, { CurriedGenerator } from './generator';

/**
 * Take function (creates slice of a stream)
 */
type Take<T> =
/**
 * @param iterable input stream
 * @returns output sliced stream
 */
(iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
/**
 * Function to created slice of a stream (substream)
 * takes first N items from input stream
 * @param amount number of items to take
 * @return take function to slice stream
 */
export default function take<T>(amount: number): Take<T>;

/**
 * Function to created slice of a stream (substream)
 * takes first N items from input stream
 * @param amount number of items to take
 * @param iterable input stream
 * @returns output sliced stream
 */
export default function take<T>(amount: number, iterable: Iterable<T>): IterableIterator<T>;

export default function take<T>(
    ...args: [ number ] | [ number, Iterable<T> ]
): Take<T> | IterableIterator<T> {
    return (<CurriedGenerator<T>>curriedGenerator)(...args);
}
/* eslint-enable import/export */
