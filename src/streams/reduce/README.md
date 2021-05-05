## reduce module

### Type aliases

* [Reduce](README.md#reduce)
* [ReducerFunction](README.md#reducerfunction)

### Functions

* [reduce](README.md#reduce)

## Type aliases

###  Reduce

Ƭ **Reduce**: *function*

*Defined in [index.ts:18](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/reduce/index.ts#L18)*

Reduce function (reduces stream to single value)

#### Type declaration:

▸ (`iterable`: Iterable‹T›): *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

___

###  ReducerFunction

Ƭ **ReducerFunction**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/reduce/index.ts#L6)*

Reducer function to accumulate value

#### Type declaration:

▸ (`reduced`: T, `item`: T, `index`: number): *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reduced` | T | accumulator |
`item` | T | item to accumulate |
`index` | number | item index in stream |

## Functions

###  reduce

▸ **reduce**‹**T**›(`reducer`: [ReducerFunction](README.md#reducerfunction)‹T›): *[Reduce](README.md#reduce)‹T›*

*Defined in [index.ts:32](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/reduce/index.ts#L32)*

Function to execute a reducer function on each element of the stream,
resulting in a single output value

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [ReducerFunction](README.md#reducerfunction)‹T› | function to reduce stream to a single value |

**Returns:** *[Reduce](README.md#reduce)‹T›*

reduce function

▸ **reduce**‹**T**›(`reducer`: [ReducerFunction](README.md#reducerfunction)‹T›, `iterable`: Iterable‹T›): *T*

*Defined in [index.ts:41](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/reduce/index.ts#L41)*

Function to execute a reducer function on each element of the stream,
resulting in a single output value

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [ReducerFunction](README.md#reducerfunction)‹T› | function to reduce stream to a single value |
`iterable` | Iterable‹T› | input stream |

**Returns:** *T*

accumulation result
