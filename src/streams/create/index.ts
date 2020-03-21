import curriedGenerator from './generator';

type CreateFunction<T> = (index: number) => T;

type Creator<T> = (amount: number) => IterableIterator<T>;

/* eslint-disable import/export */
export default function create<T>(createFn: CreateFunction<T>): Creator<T>;
export default function create<T>(createFn: CreateFunction<T>, amount: number): IterableIterator<T>;

export default function create<T>(...args: any[]): Creator<T> | IterableIterator<T> {
    return curriedGenerator(...args);
}
/* eslint-enable import/export */
