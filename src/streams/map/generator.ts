import curry from '../../utility/curry';

export default curry(
    function* map<S extends any, D extends any>(
        mapFn: (item: S, index: number) => D,
        iterable: Iterable<S>
    ): IterableIterator<D> {
        let index = 0;

        for (const item of iterable) {
            yield mapFn(item, index);

            index++;
        }
    }
);
