## last module

### Type aliases

* [Last](README.md#last)

### Functions

* [last](README.md#last)

## Type aliases

###  Last

Ƭ **Last**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/last/index.ts#L6)*

Last function (creates slice of a stream)

#### Type declaration:

▸ (`iterable`: Iterable‹T›): *IterableIterator‹T›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

## Functions

###  last

▸ **last**<**T**>(`amount`: number): *[Last](README.md#last)‹T›*

*Defined in [index.ts:20](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/last/index.ts#L20)*

Function to created slice of a stream (substream)
takes last N items from input stream

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | number of items to take |

**Returns:** *[Last](README.md#last)‹T›*

last function to slice stream

▸ **last**<**T**>(`amount`: number, `iterable`: Iterable‹T›): *IterableIterator‹T›*

*Defined in [index.ts:29](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/last/index.ts#L29)*

Function to created slice of a stream (substream)
takes last N items from input stream

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | number of items to take |
`iterable` | Iterable‹T› | input stream |

**Returns:** *IterableIterator‹T›*

output sliced stream
