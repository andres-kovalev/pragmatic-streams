## every module

### Type aliases

* [Every](README.md#every)
* [Predicate](README.md#predicate)

### Functions

* [every](README.md#every)

## Type aliases

###  Every

Ƭ **Every**: *function*

*Defined in [index.ts:17](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/every/index.ts#L17)*

Every function (returns true when every item fits predicate)

#### Type declaration:

▸ (`iterable`: Iterable‹T›): *boolean*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

___

###  Predicate

Ƭ **Predicate**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/every/index.ts#L6)*

Predicate function

#### Type declaration:

▸ (`item`: T, `index`: number): *boolean*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | next item |
`index` | number | item index in stream |

## Functions

###  every

▸ **every**‹**T**›(`predicate`: [Predicate](README.md#predicate)‹T›): *[Every](README.md#every)‹T›*

*Defined in [index.ts:30](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/every/index.ts#L30)*

Function to test whether all elements in the stream pass the test implemented in predicate

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](README.md#predicate)‹T› | predicate function |

**Returns:** *[Every](README.md#every)‹T›*

every function

▸ **every**‹**T**›(`predicate`: [Predicate](README.md#predicate)‹T›, `iterable`: Iterable‹T›): *boolean*

*Defined in [index.ts:38](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/every/index.ts#L38)*

Function to test whether all elements in the array pass the test implemented in predicate

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](README.md#predicate)‹T› | predicate function |
`iterable` | Iterable‹T› | input stream |

**Returns:** *boolean*

true if every element in the stream pass the test
