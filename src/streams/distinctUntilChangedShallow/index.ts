import generator from './generator';

export default function distinctUntilChangedShallow<T>(iterable: Iterable<T>): IterableIterator<T> {
    return generator(iterable);
}
