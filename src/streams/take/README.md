## take module

### Type aliases

* [Take](README.md#take)

### Functions

* [take](README.md#take)

## Type aliases

###  Take

Ƭ **Take**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/take/index.ts#L6)*

Take function (creates slice of a stream)

#### Type declaration:

▸ (`iterable`: Iterable‹T›): *IterableIterator‹T›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

## Functions

###  take

▸ **take**‹**T**›(`amount`: number): *[Take](README.md#take)‹T›*

*Defined in [index.ts:20](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/take/index.ts#L20)*

Function to created slice of a stream (substream)
takes first N items from input stream

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | number of items to take |

**Returns:** *[Take](README.md#take)‹T›*

take function to slice stream

▸ **take**‹**T**›(`amount`: number, `iterable`: Iterable‹T›): *IterableIterator‹T›*

*Defined in [index.ts:29](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/take/index.ts#L29)*

Function to created slice of a stream (substream)
takes first N items from input stream

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | number of items to take |
`iterable` | Iterable‹T› | input stream |

**Returns:** *IterableIterator‹T›*

output sliced stream
