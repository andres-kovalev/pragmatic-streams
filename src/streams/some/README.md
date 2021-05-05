## some module

### Type aliases

* [Predicate](README.md#predicate)
* [Some](README.md#some)

### Functions

* [some](README.md#some)

## Type aliases

###  Predicate

Ƭ **Predicate**: *function*

*Defined in [index.ts:6](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/some/index.ts#L6)*

Predicate function

#### Type declaration:

▸ (`item`: T, `index`: number): *boolean*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | next item |
`index` | number | item index in stream |

___

###  Some

Ƭ **Some**: *function*

*Defined in [index.ts:17](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/some/index.ts#L17)*

Some function (returns true when any item fits predicate)

#### Type declaration:

▸ (`iterable`: Iterable‹T›): *boolean*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | input stream |

## Functions

###  some

▸ **some**‹**T**›(`predicate`: [Predicate](README.md#predicate)‹T›): *[Some](README.md#some)‹T›*

*Defined in [index.ts:31](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/some/index.ts#L31)*

Function to test whether at least one element in the stream passes the test
implemented in predicate

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](README.md#predicate)‹T› | predicate function |

**Returns:** *[Some](README.md#some)‹T›*

some function

▸ **some**‹**T**›(`predicate`: [Predicate](README.md#predicate)‹T›, `iterable`: Iterable‹T›): *boolean*

*Defined in [index.ts:40](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/streams/some/index.ts#L40)*

Function to test whether at least one element in the stream passes the test
implemented in predicate

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](README.md#predicate)‹T› | predicate function |
`iterable` | Iterable‹T› | input stream |

**Returns:** *boolean*

true if any element in the stream pass the test
