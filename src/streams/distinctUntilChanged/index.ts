import curriedGenerator from './generator';

type CompareFunction<T> = (item1: T, item2: T) => boolean;

type DistinctUntilChanged<T> = (iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
export default function distinctUntilChanged<T>(
    compareFn: CompareFunction<T>
): DistinctUntilChanged<T>;

export default function distinctUntilChanged<T>(
    compareFn: CompareFunction<T>,
    iterable: Iterable<T>
): IterableIterator<T>;

export default function distinctUntilChanged<T>(
    ...args: any[]
): DistinctUntilChanged<T> | IterableIterator<T> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
