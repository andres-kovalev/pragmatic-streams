import curriedGenerator from './generator';

/**
 * Function to generate items using item index
 */
type CreateFunction<T> =
/**
 * @param index index of newly created item
 * @returns created item
 */
(index: number) => T;

/**
 * Creator function (generates certain amount of items)
 */
type Creator<T> =
/**
 * @param amount number of items to create
 * @returns stream of created items
 */
(amount: number) => IterableIterator<T>;

/* eslint-disable import/export */
/**
 * Function to create sync stream of items
 * @param createFn function to generate items
 * @returns creator function
 */
export default function create<T>(createFn: CreateFunction<T>): Creator<T>;

/**
 * Function to create sync stream of items
 * @param createFn function to generate items
 * @param amount number of items to create
 * @returns stream of created items
 */
export default function create<T>(createFn: CreateFunction<T>, amount: number): IterableIterator<T>;

export default function create<T>(...args: any[]): Creator<T> | IterableIterator<T> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
