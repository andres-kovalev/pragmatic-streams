## curry module

### Type aliases

* [Args](README.md#args)
* [Curried](README.md#curried)
* [Curry](README.md#curry)
* [PartialArgs](README.md#partialargs)
* [Tail](README.md#tail)
* [TailArray](README.md#tailarray)

### Functions

* [curry](README.md#const-curry)

## Type aliases

###  Args

Ƭ **Args**: *T extends function ? TArgs : never*

*Defined in [index.ts:11](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/utility/curry/index.ts#L11)*

___

###  Curried

Ƭ **Curried**: *function*

*Defined in [index.ts:19](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/utility/curry/index.ts#L19)*

#### Type declaration:

▸ <**TArgs**, **TRest**>(...`args`: TArgs): *TRest extends [] ? TReturn : Curried<function>*

**Type parameters:**

▪ **TArgs**: *[PartialArgs](README.md#partialargs)‹T›*

▪ **TRest**: *[TailArray](README.md#tailarray)‹[Args](README.md#args)‹T›, TArgs["length"]›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | TArgs |

___

###  Curry

Ƭ **Curry**: *function*

*Defined in [index.ts:28](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/utility/curry/index.ts#L28)*

#### Type declaration:

▸ <**TFunc**>(`fn`: TFunc, `arity?`: number): *[Curried](README.md#curried)‹TFunc›*

**Type parameters:**

▪ **TFunc**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | TFunc |
`arity?` | number |

___

###  PartialArgs

Ƭ **PartialArgs**: *T extends function ? Partial<TArgs> : never*

*Defined in [index.ts:15](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/utility/curry/index.ts#L15)*

___

###  Tail

Ƭ **Tail**:

*Defined in [index.ts:1](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/utility/curry/index.ts#L1)*

___

###  TailArray

Ƭ **TailArray**: *[Tail](README.md#tail)‹function, S›*

*Defined in [index.ts:8](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/utility/curry/index.ts#L8)*

## Functions

### `Const` curry

▸ **curry**(`fn`: TFunc, `arity`: number): *(Anonymous function)*

*Defined in [index.ts:30](https://github.com/andres-kovalev/pragmatic-streams/blob/master/src/utility/curry/index.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fn` | TFunc | - |
`arity` | number | fn.length |

**Returns:** *(Anonymous function)*
