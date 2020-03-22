## distinctUntilChanged module

### Type aliases

* [CompareFunction](README.md#comparefunction)
* [DistinctUntilChanged](README.md#distinctuntilchanged)

### Functions

* [distinctUntilChanged](README.md#distinctuntilchanged)

## Type aliases

###  CompareFunction

Ƭ **CompareFunction**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/distinctUntilChanged/index.ts#L6)*

Compare function (compares two items)

#### Type declaration:

▸ (`item1`: T, `item2`: T): *boolean*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item1` | T | first item |
`item2` | T | second item |

___

###  DistinctUntilChanged

Ƭ **DistinctUntilChanged**: *function*

*Defined in [index.ts:17](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/distinctUntilChanged/index.ts#L17)*

Distinct function (returns new stream with distinct items)

#### Type declaration:

▸ (`iterable`: Iterable‹T›): *IterableIterator‹T›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

## Functions

###  distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`compareFn`: [CompareFunction](README.md#comparefunction)‹T›): *[DistinctUntilChanged](README.md#distinctuntilchanged)‹T›*

*Defined in [index.ts:30](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/distinctUntilChanged/index.ts#L30)*

Function to create new stream where items are distinct until changed

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn` | [CompareFunction](README.md#comparefunction)‹T› | function to compare two items |

**Returns:** *[DistinctUntilChanged](README.md#distinctuntilchanged)‹T›*

distinct function to transform stream

▸ **distinctUntilChanged**<**T**>(`compareFn`: [CompareFunction](README.md#comparefunction)‹T›, `iterable`: Iterable‹T›): *IterableIterator‹T›*

*Defined in [index.ts:40](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/distinctUntilChanged/index.ts#L40)*

Function to create new stream where items are distinct until changed

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn` | [CompareFunction](README.md#comparefunction)‹T› | function to compare two items |
`iterable` | Iterable‹T› | input stream |

**Returns:** *IterableIterator‹T›*

output stream
