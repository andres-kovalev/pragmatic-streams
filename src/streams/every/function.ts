import curry, { Curried } from '../../utility/curry';

export type CurriedFunction<T extends any> = Curried<
    (predicate: (item: T, index: number) => boolean, iterable: Iterable<T>) => boolean
>;

export default curry(
    function every<T>(
        predicate: (item: T, index: number) => boolean,
        iterable: Iterable<T>
    ): boolean {
        let index = 0;

        for (const item of iterable) {
            if (!predicate(item, index++)) {
                return false;
            }
        }

        return true;
    }
);
