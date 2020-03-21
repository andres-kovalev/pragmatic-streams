import curriedGenerator from './generator';

type Skip<T> = (iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
export default function skip<T>(amount: number): Skip<T>;

export default function skip<T>(amount: number, iterable: Iterable<T>): IterableIterator<T>;

export default function skip<T>(...args: any[]): Skip<T> | IterableIterator<T> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
