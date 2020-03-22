## skip module

### Type aliases

* [Skip](README.md#skip)

### Functions

* [skip](README.md#skip)

## Type aliases

###  Skip

Ƭ **Skip**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/skip/index.ts#L6)*

Skip function (creates slice of a stream)

#### Type declaration:

▸ (`iterable`: Iterable‹T›): *IterableIterator‹T›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

## Functions

###  skip

▸ **skip**<**T**>(`amount`: number): *[Skip](README.md#skip)‹T›*

*Defined in [index.ts:20](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/skip/index.ts#L20)*

Function to created slice of a stream (substream)
skips first N items from input stream and returns the rest

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | number of items to skip |

**Returns:** *[Skip](README.md#skip)‹T›*

skip function to slice stream

▸ **skip**<**T**>(`amount`: number, `iterable`: Iterable‹T›): *IterableIterator‹T›*

*Defined in [index.ts:29](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/skip/index.ts#L29)*

Function to created slice of a stream (substream)
skips first N items from input stream and returns the rest

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | number of items to skip |
`iterable` | Iterable‹T› | input stream |

**Returns:** *IterableIterator‹T›*

output sliced stream
