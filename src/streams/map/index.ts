import curriedGenerator from './generator';

type MapFunction<S, D> = (item: S, index: number) => D;

type Map<S, D> = (iterable: Iterable<S>) => IterableIterator<D>;

/* eslint-disable import/export */
export default function map<S, D>(mapFn: MapFunction<S, D>): Map<S, D>;

export default function map<S, D>(
    mapFn: MapFunction<S, D>,
    iterable: Iterable<S>
): IterableIterator<D>;

export default function map<S, D>(...args: any[]): Map<S, D> | IterableIterator<D> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
