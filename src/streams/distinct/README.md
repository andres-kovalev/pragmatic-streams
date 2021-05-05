## distinct module

### Functions

* [distinct](README.md#distinct)

## Functions

###  distinct

▸ **distinct**‹**T**›(`iterable`: Iterable‹T›): *IterableIterator‹T›*

*Defined in [index.ts:9](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/distinct/index.ts#L9)*

Function to create new stream where items are distinct until changed
uses strict comparison (===) to compare items

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

**Returns:** *IterableIterator‹T›*

output stream
