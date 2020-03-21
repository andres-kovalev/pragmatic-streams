import curry from '../../utility/curry';

export default curry(
    function* filter<T extends any>(
        filterFn: (item: T, index: number) => boolean,
        iterable: Iterable<T>
    ): IterableIterator<T> {
        let index = 0;

        for (const item of iterable) {
            if (filterFn(item, index)) {
                yield item;
            }

            index++;
        }
    }
);
