## map module

### Type aliases

* [Map](README.md#map)
* [MapFunction](README.md#mapfunction)

### Functions

* [map](README.md#map)

## Type aliases

###  Map

Ƭ **Map**: *function*

*Defined in [index.ts:17](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/map/index.ts#L17)*

Map function (creates transformed stream)

#### Type declaration:

▸ (`iterable`: Iterable‹S›): *IterableIterator‹D›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹S› | input stream |

___

###  MapFunction

Ƭ **MapFunction**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/map/index.ts#L6)*

Function to transform item of a stream

#### Type declaration:

▸ (`item`: S, `index`: number): *D*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | S | item to transform |
`index` | number | item index in stream |

## Functions

###  map

▸ **map**<**S**, **D**>(`mapFn`: [MapFunction](README.md#mapfunction)‹S, D›): *[Map](README.md#map)‹S, D›*

*Defined in [index.ts:30](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/map/index.ts#L30)*

Function to create transformed stream

**Type parameters:**

▪ **S**

▪ **D**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapFn` | [MapFunction](README.md#mapfunction)‹S, D› | function to transform item |

**Returns:** *[Map](README.md#map)‹S, D›*

map function to transform stream

▸ **map**<**S**, **D**>(`mapFn`: [MapFunction](README.md#mapfunction)‹S, D›, `iterable`: Iterable‹S›): *IterableIterator‹D›*

*Defined in [index.ts:38](https://github.com/andres-kovalev/pragmatic-streams/blob/08c08d4/src/streams/map/index.ts#L38)*

Function to create transformed stream

**Type parameters:**

▪ **S**

▪ **D**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapFn` | [MapFunction](README.md#mapfunction)‹S, D› | function to transform item |
`iterable` | Iterable‹S› | input stream |

**Returns:** *IterableIterator‹D›*

output transformed stream
