import generator from './generator';

export default function distinctUntilChangedStrict<T>(iterable: Iterable<T>): IterableIterator<T> {
    return generator(iterable);
}
