import curry, { Curried } from '../../utility/curry';

export type CurriedGenerator<T> = Curried<
    (predicate: (item: T, index: number) => boolean, iterable: Iterable<T>
) => IterableIterator<T>>;

export default curry(
    function* takeWhile<T extends any>(
        predicate: (item: T, index: number) => boolean,
        iterable: Iterable<T>
    ): IterableIterator<T> {
        let index = 0;

        for (const item of iterable) {
            if (!predicate(item, index)) {
                return;
            }

            yield item;
            index++;
        }
    }
);
