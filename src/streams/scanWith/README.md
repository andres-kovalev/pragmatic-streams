## scanWith module

### Type aliases

* [ReducerFunction](README.md#reducerfunction)
* [ScanWith](README.md#scanwith)

### Functions

* [scanWith](README.md#scanwith)

## Type aliases

###  ReducerFunction

Ƭ **ReducerFunction**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/scanWith/index.ts#L6)*

Reducer function to accumulate value

#### Type declaration:

▸ (`reduced`: D, `item`: S, `index`: number): *D*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reduced` | D | accumulator |
`item` | S | item to accumulate |
`index` | number | item index in stream |

___

###  ScanWith

Ƭ **ScanWith**: *function*

*Defined in [index.ts:18](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/scanWith/index.ts#L18)*

Scan function (reduces stream and emits intermediate accumulated results)

#### Type declaration:

▸ (`iterable`: Iterable‹S›): *IterableIterator‹D›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹S› | input stream |

## Functions

###  scanWith

▸ **scanWith**‹**S**, **D**›(`reducer`: [ReducerFunction](README.md#reducerfunction)‹S, D›, `initial`: D): *[ScanWith](README.md#scanwith)‹S, D›*

*Defined in [index.ts:33](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/scanWith/index.ts#L33)*

Function to execute a reducer function on each element of the stream
and emit each intermediate accumulated result

**Type parameters:**

▪ **S**

▪ **D**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [ReducerFunction](README.md#reducerfunction)‹S, D› | function to reduce stream to a single value |
`initial` | D | initial accumulated result |

**Returns:** *[ScanWith](README.md#scanwith)‹S, D›*

stream of intermediate accumulated results

▸ **scanWith**‹**S**, **D**›(`reducer`: [ReducerFunction](README.md#reducerfunction)‹S, D›, `initial`: D, `iterable`: Iterable‹S›): *IterableIterator‹D›*

*Defined in [index.ts:43](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/scanWith/index.ts#L43)*

Function to execute a reducer function on each element of the stream
and emit each intermediate accumulated result

**Type parameters:**

▪ **S**

▪ **D**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [ReducerFunction](README.md#reducerfunction)‹S, D› | function to reduce stream to a single value |
`initial` | D | initial accumulated result |
`iterable` | Iterable‹S› | input stream |

**Returns:** *IterableIterator‹D›*

stream of intermediate accumulated results
