import distinctUntilChanged from '../distinctUntilChanged';

export default distinctUntilChanged(shallowEqual);

function shallowEqual<T>(a: T, b: T): boolean {
    if (typeof a !== 'object' || typeof b !== 'object') {
        return a === b;
    }

    if (Array.isArray(a) && Array.isArray(b)) {
        return arraysAreEqual(a, b);
    }

    return objectsAreEqual(a as Record<string, any>, b as Record<string, any>);
}

function arraysAreEqual<T>(a: T[], b: T[]): boolean {
    if (a.length !== b.length) {
        return false;
    }

    return a.every(
        (item, index) => item === b[index]
    );
}

function objectsAreEqual<T>(a: Record<string, T>, b: Record<string, T>): boolean {
    const entries = Object.entries(a);

    if (entries.length !== Object.keys(b).length) {
        return false;
    }

    return entries.every(
        ([ key, value ]) => value === b[key]
    );
}
