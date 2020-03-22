import generator from './generator';

/**
 * Function to create new stream where items are distinct until changed
 * uses strict comparison (===) to compare items
 * @param iterable input stream
 * @returns output stream
 */
export default function distinctUntilChangedStrict<T>(iterable: Iterable<T>): IterableIterator<T> {
    return generator(iterable);
}
