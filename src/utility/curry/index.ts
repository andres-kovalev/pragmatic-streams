type Tail<F extends Function, S extends Number> =
  S extends 0 ? (F extends (...args: infer TArgs) => any ? TArgs : never) :
  S extends 1 ? (F extends (a: any, ...args: infer TArgs) => any ? TArgs : never) :
  S extends 2 ? (F extends (a: any, b: any, ...args: infer TArgs) => any ? TArgs : never) :
  S extends 3 ? (F extends (a: any, b: any, c: any, ...args: infer TArgs) => any ? TArgs : never) :
  never

type TailArray<A extends any[], S extends Number> =
  Tail<(...args: A) => any, S>

type Args<T extends Function> =
  T extends (...args: infer TArgs) => any ? TArgs
  : never

type PartialArgs<T extends Function> =
  T extends (...args: infer TArgs) => any ? Partial<TArgs>
  : never

export type Curried<T extends (...args: any) => any, TReturn = ReturnType<T>> =
  <
    TArgs extends PartialArgs<T>,
    TRest extends TailArray<Args<T>, TArgs['length']>
  >(...args: TArgs) =>
    TRest extends []
      ? TReturn
      : Curried<(...args: TRest) => TReturn>

type Curry = <TFunc extends (...args: any) => any>(fn: TFunc, arity?: number) => Curried<TFunc>;

const curry: Curry = (fn, arity = fn.length) => (...args) => {
    if (args.length >= arity) {
        return fn(...args);
    }

    return curry((...rest) => fn(...args, ...rest));
};

export default curry;
