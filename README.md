[![ci](https://img.shields.io/circleci/build/github/andres-kovalev/pragmatic-streams.svg?style=flat-square&logo=circleci)](https://circleci.com/gh/andres-kovalev/pragmatic-streams)
[![codecov](https://img.shields.io/codecov/c/github/andres-kovalev/pragmatic-streams.svg?style=flat-square&logo=codecov&token=1280f2cf41a24522add9857967be2a73)](https://codecov.io/gh/andres-kovalev/pragmatic-streams)
[![downloads](https://img.shields.io/npm/dm/pragmatic-streams.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiCj48ZyBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTM3OSwxODAuNWgtMTAydi0xMDBoLTE1M3YxMDBoLTEwMmwxNzguNSwxNzguNWwxNzguNSwtMTc4LDUiLz48L2c+PC9zdmc+Cg==)](https://www.npmjs.com/package/pragmatic-streams)
[![node](https://img.shields.io/node/v/pragmatic-streams.svg?style=flat-square&logo=node.js&color=007ec6)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/pragmatic-streams.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/pragmatic-streams)
[![MIT](https://img.shields.io/npm/l/pragmatic-streams.svg?color=007ec6&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA5ElEQVR4AY3SJWyDcRQE8G+MsnIg63XNmMm2ZuB9xjyv5tWYfAZ2TD6tGW9qzHCX3H9bX4rJz7y7K3t8NK20OT7ogHnYl3ndfK5nRwFYgxf4Nl6UBVzfjcoholIiEXbdsBS2TCERdks5HIaPVIfqDnN4HCO8gUm5iZEfc/gYI+gBT3pi5I8M3szxE0LgSYg303ljcGqOtAHFshEjP+VwOkbwCvXyGiOf5rASrkwQhhIJm4zdKg4zYBDe/z8j72Te0bu6GRxSIUzAHXxBF3jSpdudOoX2/5oDQVgEP3ji1y3Ijhv9ABp7euvVsybrAAAAAElFTkSuQmCC&style=flat-square)](https://github.com/andres-kovalev/pragmatic-streams/blob/master/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/pragmatic-streams.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGZpbGw9IndoaXRlIj48cGF0aCBkPSJNNzUsMzBoMTc1bDEwMCwxMDB2MjQwaC0yNzV2LTI0MCIvPjwvZz48ZyBmaWxsPSIjREREIj48cGF0aCBkPSJNMjUwLDMwbDEwMCwxMDBoLTEwMHYtMTAwIi8+PC9nPjwvc3ZnPgo=)](https://www.npmjs.com/package/pragmatic-streams)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

# pragmatic-streams

Set of pragmatic operations on iterables.

* full documentation can be found on [https://andres-kovalev.github.io/pragmatic-streams/](https://andres-kovalev.github.io/pragmatic-streams/)
* few demo examples can be found in [playground](https://repl.it/@andreskovalev/pragmatic-streams-playground)

# Description

`pragmatic-streams` provides utility functions to operate with iterable structures (like arrays and iterators). There operators are similar to native array functions (like `filter`, `map`, `reduce` etc). There are just two differences:
* stream operators are lazy, which means all calculations performed only when needed.
* stream operators supports are curried (support partial application), so they can be combined to get more complex operators.

# Installation

As any other npm package `pragmatic-streams` can be added to your project by following command:

```bash
npm i -S pragmatic-streams
```

# API

There are several stream operators provided by this package:

* [create](src/streams/create/README.md)
* [distinct](src/streams/distinct/README.md)
* [distinctUntilChanged](src/streams/distinctUntilChanged/README.md)
* [distinctUntilChangedShallow](src/streams/distinctUntilChangedShallow/README.md)
* [distinctUntilChangedStrict](src/streams/distinctUntilChangedStrict/README.md)
* [every](src/streams/every/README.md)
* [filter](src/streams/filter/README.md)
* [last](src/streams/last/README.md)
* [map](src/streams/map/README.md)
* [reduce](src/streams/reduce/README.md)
* [reduceWith](src/streams/reduceWith/README.md)
* [scan](src/streams/scan/README.md)
* [scanWith](src/streams/scanWith/README.md)
* [skip](src/streams/skip/README.md)
* [some](src/streams/some/README.md)
* [take](src/streams/take/README.md)
* [takeWhile](src/streams/takeWhile/README.md)

Most stream operators consumes at least 1 argument - iterable value. For instance, `filter` operator lets us to filter out some values, when `map` operator transforms each item of input iterable. Both returns new iterable:

```js
import { filter, map } from 'pragmatic-streams';

const source = [ 1, 2, 3, 4, 5, 6 ];

const isOdd = item => (item & 1);
const add2 = item => item + 2;

const filtered = filter(isOdd, source); // [ 1, 3, 5 ]
const transformed = map(add2, source); // [ 3, 4, 5, 6, 7, 8 ];

const filteredAndTransformed = map(add2, filter(isOdd, source)); // [ 3, 5, 7 ]
```

As we mentioned before, all operators supports partial application:

```js
const filterOdd = filter(item => (item & 1));
const add2 = map(item => item + 2);

const filtered = filterOdd(source); // [ 1, 3, 5 ]
const transformed = add2(source); // [ 3, 4, 5, 6, 7, 8 ];

const filteredAndTransformed = add2(filterOdd(source)); // [ 3, 5, 7 ]
```

As you can see, behavior is similar to native `Array.prototype.filter()` and `Array.prototype.map()`, so why we need this operators? Since stream operators supports partial application, they can be combined:

```js
import { filter, map, pipe } from 'pragmatic-streams';

...

const filterAndTransform = pipe(
    filter(isOdd),
    map(add2),
);

const filteredAndTransformed = filterAndTransform(source);
```

Also stream operators are lazy, which means they can improve performance when combined. Each operator pulls data from previous one, so if last one need only certain amount of items, it will call previous operator accordingly:

```js
const source = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// native example
...
const first3 = (_, index) => index < 3;

const result = source
    .filter(isOdd) // will call isOdd() function 10 times (for each item)
    .map(add2) // will call add2() function 5 times (for each filtered item)
    .filter(first3); // will call first3() function 5 times (for each filtered item)

// stream example
import { filter, map, take, pipe } from 'pragmatic-streams';

...

const complexOperator(
    filter(isOdd), // will call isOdd() function only until we get 3 items (5 times)
                   // because of take(3)
    map(add2),     // will call add2() function only 3 times
    take(3)        // tooks only 3 first items, so filter
);

const result = complexOperator(source);
```

All operators returns iterators, so we can use result only once:

```js
...
const result = complexOperator(source);

for(let item of result) {
    console.log(item); // will print 3, 5 and 7
}

for(let item of result) {
    console.log(item); // won't print anything
}
```

So, if we need to re-use result, we should store data by, for instance, converting iterator into an array:

```js
const result = [ ...complexOperator(source) ];

for(let item of result) {
    console.log(item); // will print 3, 5 and 7
}

for(let item of result) {
    console.log(item); // will print 3, 5 and 7 again
}
```

There are several helpful functions provided to make work with partially applied operators easier:

* [curry](src/utility/curry/README.md)
* [pipe](src/utility/pipe/README.md)

