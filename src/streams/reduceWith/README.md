## reduceWith module

### Type aliases

* [ReduceWith](README.md#reducewith)
* [ReducerFunction](README.md#reducerfunction)

### Functions

* [reduceWith](README.md#reducewith)

## Type aliases

###  ReduceWith

Ƭ **ReduceWith**: *function*

*Defined in [index.ts:18](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/reduceWith/index.ts#L18)*

Reduce function (reduces stream to single value)

#### Type declaration:

▸ (`iterable`: Iterable‹S›): *D*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹S› | input stream |

___

###  ReducerFunction

Ƭ **ReducerFunction**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/reduceWith/index.ts#L6)*

Reducer function to accumulate value

#### Type declaration:

▸ (`reduced`: D, `item`: S, `index`: number): *D*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reduced` | D | accumulator |
`item` | S | item to accumulate |
`index` | number | item index in stream |

## Functions

###  reduceWith

▸ **reduceWith**‹**S**, **D**›(`reducer`: [ReducerFunction](README.md#reducerfunction)‹S, D›, `initial`: D): *[ReduceWith](README.md#reducewith)‹S, D›*

*Defined in [index.ts:33](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/reduceWith/index.ts#L33)*

Function to execute a reducer function on each element of the stream,
resulting in a single output value

**Type parameters:**

▪ **S**

▪ **D**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [ReducerFunction](README.md#reducerfunction)‹S, D› | function to reduce stream to a single value |
`initial` | D | initial accumulated result |

**Returns:** *[ReduceWith](README.md#reducewith)‹S, D›*

reduce function

▸ **reduceWith**‹**S**, **D**›(`reducer`: [ReducerFunction](README.md#reducerfunction)‹S, D›, `initial`: D, `iterable`: Iterable‹S›): *D*

*Defined in [index.ts:45](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/reduceWith/index.ts#L45)*

Function to execute a reducer function on each element of the stream,
resulting in a single output value

**Type parameters:**

▪ **S**

▪ **D**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [ReducerFunction](README.md#reducerfunction)‹S, D› | function to reduce stream to a single value |
`initial` | D | initial accumulated result |
`iterable` | Iterable‹S› | input stream |

**Returns:** *D*

accumulation result
