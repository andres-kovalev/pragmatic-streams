## scan module

### Type aliases

* [ReducerFunction](README.md#reducerfunction)
* [Scan](README.md#scan)

### Functions

* [scan](README.md#scan)

## Type aliases

###  ReducerFunction

Ƭ **ReducerFunction**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/scan/index.ts#L6)*

Reducer function to accumulate value

#### Type declaration:

▸ (`reduced`: T, `item`: T, `index`: number): *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reduced` | T | accumulator |
`item` | T | item to accumulate |
`index` | number | item index in stream |

___

###  Scan

Ƭ **Scan**: *function*

*Defined in [index.ts:18](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/scan/index.ts#L18)*

Scan function (reduces stream and emits intermediate accumulated results)

#### Type declaration:

▸ (`iterable`: Iterable‹T›): *IterableIterator‹T›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

## Functions

###  scan

▸ **scan**‹**T**›(`reducer`: [ReducerFunction](README.md#reducerfunction)‹T›): *[Scan](README.md#scan)‹T›*

*Defined in [index.ts:32](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/scan/index.ts#L32)*

Function to execute a reducer function on each element of the stream
and emit each intermediate accumulated result

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [ReducerFunction](README.md#reducerfunction)‹T› | function to reduce stream to a single value |

**Returns:** *[Scan](README.md#scan)‹T›*

stream of intermediate accumulated results

▸ **scan**‹**T**›(`reducer`: [ReducerFunction](README.md#reducerfunction)‹T›, `iterable`: Iterable‹T›): *IterableIterator‹T›*

*Defined in [index.ts:41](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/scan/index.ts#L41)*

Function to execute a reducer function on each element of the stream
and emit each intermediate accumulated result

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [ReducerFunction](README.md#reducerfunction)‹T› | function to reduce stream to a single value |
`iterable` | Iterable‹T› | input stream |

**Returns:** *IterableIterator‹T›*

stream of intermediate accumulated results
