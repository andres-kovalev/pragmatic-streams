import curry, { Curried } from '../../utility/curry';
import filter from '../filter';

export type CurriedGenerator<T> = Curried<
    (amount: number, iterable: Iterable<T>) => IterableIterator<T>
>;

export default curry(
    <T extends any>(amount: number, iterable: Iterable<T>): IterableIterator<T> => filter<T>(
        (_, index) => index >= amount, iterable
    )
);
