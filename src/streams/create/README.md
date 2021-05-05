## create module

### Type aliases

* [CreateFunction](README.md#createfunction)
* [Creator](README.md#creator)

### Functions

* [create](README.md#create)

## Type aliases

###  CreateFunction

Ƭ **CreateFunction**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/create/index.ts#L6)*

Function to generate items using item index

#### Type declaration:

▸ (`index`: number): *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | index of newly created item |

___

###  Creator

Ƭ **Creator**: *function*

*Defined in [index.ts:16](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/create/index.ts#L16)*

Creator function (generates certain amount of items)

#### Type declaration:

▸ (`amount`: number): *IterableIterator‹T›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | number of items to create |

## Functions

###  create

▸ **create**‹**T**›(`createFn`: [CreateFunction](README.md#createfunction)‹T›): *[Creator](README.md#creator)‹T›*

*Defined in [index.ts:29](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/create/index.ts#L29)*

Function to create sync stream of items

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createFn` | [CreateFunction](README.md#createfunction)‹T› | function to generate items |

**Returns:** *[Creator](README.md#creator)‹T›*

creator function

▸ **create**‹**T**›(`createFn`: [CreateFunction](README.md#createfunction)‹T›, `amount`: number): *IterableIterator‹T›*

*Defined in [index.ts:37](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/create/index.ts#L37)*

Function to create sync stream of items

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createFn` | [CreateFunction](README.md#createfunction)‹T› | function to generate items |
`amount` | number | number of items to create |

**Returns:** *IterableIterator‹T›*

stream of created items
