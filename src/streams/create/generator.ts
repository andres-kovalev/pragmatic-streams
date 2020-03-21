import curry from '../../utility/curry';

export default curry(
    function* create<T extends any>(
        createFn: (index: number) => T,
        amount: number
    ): IterableIterator<T> {
        let index = 0;

        while (index < amount) {
            yield createFn(index);

            index++;
        }
    }
);
