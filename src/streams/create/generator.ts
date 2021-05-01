import curry, { Curried } from '../../utility/curry';

export type CurriedGenerator<T> = Curried<
    (createFn: (index: number) => T, amount: number) => IterableIterator<T>
>;

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
