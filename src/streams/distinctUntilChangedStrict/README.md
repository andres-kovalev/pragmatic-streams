## distinctUntilChangedStrict module

### Functions

* [distinctUntilChangedStrict](README.md#distinctuntilchangedstrict)

## Functions

###  distinctUntilChangedStrict

▸ **distinctUntilChangedStrict**‹**T**›(`iterable`: Iterable‹T›): *IterableIterator‹T›*

*Defined in [index.ts:10](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/distinctUntilChangedStrict/index.ts#L10)*

**`deprecated`** Use distinct() instead.
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
