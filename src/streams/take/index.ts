import curriedGenerator from './generator';

type Take<T> = (iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
export default function take<T>(amount: number): Take<T>;

export default function take<T>(amount: number, iterable: Iterable<T>): IterableIterator<T>;

export default function take<T>(...args: any[]): Take<T> | IterableIterator<T> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
