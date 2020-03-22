const pipe: import('ts-functionaltypes').Pipe = (...functions) => (arg) => functions.reduce(
    (result, fn) => fn(result),
    arg
);

export default pipe;
