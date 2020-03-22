import curriedGenerator from './generator';

type Last<T> = (iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
export default function last<T>(amount: number): Last<T>;

export default function last<T>(amount: number, iterable: Iterable<T>): IterableIterator<T>;

export default function last<T>(...args: any[]): Last<T> | IterableIterator<T> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
