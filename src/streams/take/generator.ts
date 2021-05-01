import curry, { Curried } from '../../utility/curry';

export type CurriedGenerator<T> = Curried<
    (amount: number, iterable: Iterable<T>) => IterableIterator<T>
>;

export default curry(
    function* take<T extends any>(amount: number, iterable: Iterable<T>): IterableIterator<T> {
        const iterator = iterable[Symbol.iterator]();
        let index = 0;

        while (index < amount) {
            const { value, done } = iterator.next();

            if (done) {
                return;
            }

            yield value;

            index++;
        }
    }
);
