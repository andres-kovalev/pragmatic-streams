import curry from '../../utility/curry';

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
