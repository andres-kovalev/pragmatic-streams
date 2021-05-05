## takeWhile module

### Type aliases

* [PredicateFunction](README.md#predicatefunction)
* [TakeWhile](README.md#takewhile)

### Functions

* [takeWhile](README.md#takewhile)

## Type aliases

###  PredicateFunction

Ƭ **PredicateFunction**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/takeWhile/index.ts#L6)*

Predicate

#### Type declaration:

▸ (`item`: T, `index`: number): *boolean*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | item to check |
`index` | number | item index in stream |

___

###  TakeWhile

Ƭ **TakeWhile**: *function*

*Defined in [index.ts:17](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/takeWhile/index.ts#L17)*

TakeWhile function (creates slice of a steam)

#### Type declaration:

▸ (`iterable`: Iterable‹T›): *IterableIterator‹T›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

## Functions

###  takeWhile

▸ **takeWhile**‹**T**›(`filterFn`: [PredicateFunction](README.md#predicatefunction)‹T›): *[TakeWhile](README.md#takewhile)‹T›*

*Defined in [index.ts:30](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/takeWhile/index.ts#L30)*

Function to take items from input stream while predicate returns true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`filterFn` | [PredicateFunction](README.md#predicatefunction)‹T› |

**Returns:** *[TakeWhile](README.md#takewhile)‹T›*

filter function

▸ **takeWhile**‹**T**›(`predicate`: [PredicateFunction](README.md#predicatefunction)‹T›, `iterable`: Iterable‹T›): *IterableIterator‹T›*

*Defined in [index.ts:38](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/takeWhile/index.ts#L38)*

Function to take items from input stream while predicate returns true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [PredicateFunction](README.md#predicatefunction)‹T› | filter predicate |
`iterable` | Iterable‹T› | input stream |

**Returns:** *IterableIterator‹T›*

output filtered stream
