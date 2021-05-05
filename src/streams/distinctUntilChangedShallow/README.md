## distinctUntilChangedShallow module

### Functions

* [distinctUntilChangedShallow](README.md#distinctuntilchangedshallow)

## Functions

###  distinctUntilChangedShallow

▸ **distinctUntilChangedShallow**‹**T**›(`iterable`: Iterable‹T›): *IterableIterator‹T›*

*Defined in [index.ts:10](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/distinctUntilChangedShallow/index.ts#L10)*

Function to create new stream where items are distinct until changed
uses shallow comparison to compare items
so two objects with identical structure considered as equal

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

**Returns:** *IterableIterator‹T›*

output stream
