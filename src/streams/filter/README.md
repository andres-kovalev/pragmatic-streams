## filter module

### Type aliases

* [Filter](README.md#filter)
* [FilterFunction](README.md#filterfunction)

### Functions

* [filter](README.md#filter)

## Type aliases

###  Filter

Ƭ **Filter**: *function*

*Defined in [index.ts:17](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/filter/index.ts#L17)*

Filter function (creates filtered stream)

#### Type declaration:

▸ (`iterable`: Iterable‹T›): *IterableIterator‹T›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

___

###  FilterFunction

Ƭ **FilterFunction**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/filter/index.ts#L6)*

Filter predicate

#### Type declaration:

▸ (`item`: T, `index`: number): *boolean*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | item to filter |
`index` | number | item index in stream |

## Functions

###  filter

▸ **filter**‹**T**›(`filterFn`: [FilterFunction](README.md#filterfunction)‹T›): *[Filter](README.md#filter)‹T›*

*Defined in [index.ts:30](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/filter/index.ts#L30)*

Function to create filtered stream

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filterFn` | [FilterFunction](README.md#filterfunction)‹T› | filter predicate |

**Returns:** *[Filter](README.md#filter)‹T›*

filter function

▸ **filter**‹**T**›(`filterFn`: [FilterFunction](README.md#filterfunction)‹T›, `iterable`: Iterable‹T›): *IterableIterator‹T›*

*Defined in [index.ts:38](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/filter/index.ts#L38)*

Function to create filtered stream

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filterFn` | [FilterFunction](README.md#filterfunction)‹T› | filter predicate |
`iterable` | Iterable‹T› | input stream |

**Returns:** *IterableIterator‹T›*

output filtered stream
