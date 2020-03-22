import curry from '../../utility/curry';
import filter from '../filter';

export default curry(
    <T extends any>(amount: number, iterable: Iterable<T>): IterableIterator<T> => filter<T>(
        (_, index) => index >= amount, iterable
    )
);
