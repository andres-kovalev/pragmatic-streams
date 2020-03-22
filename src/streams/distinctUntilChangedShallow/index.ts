import generator from './generator';

/**
 * Function to create new stream where items are distinct until changed
 * uses shallow comparison to compare items
 * so two objects with identical structure considered as equal
 * @param iterable input stream
 * @returns output stream
 */
export default function distinctUntilChangedShallow<T>(iterable: Iterable<T>): IterableIterator<T> {
    return generator(iterable);
}
