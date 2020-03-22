import distinctUntilChanged from '../distinctUntilChanged';

export default distinctUntilChanged(strictEqual);

function strictEqual<T>(a: T, b: T): boolean {
    return a === b;
}
