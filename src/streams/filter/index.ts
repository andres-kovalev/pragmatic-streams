import curriedGenerator from './generator';

type FilterFunction<T> = (item: T, index: number) => boolean;

type Filter<T> = (iterable: Iterable<T>) => IterableIterator<T>;

/* eslint-disable import/export */
export default function filter<T>(filterFn: FilterFunction<T>): Filter<T>;

export default function filter<T>(
    filterFn: FilterFunction<T>,
    iterable: Iterable<T>
): IterableIterator<T>;

export default function filter<T>(...args: any): Filter<T> | IterableIterator<T> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
