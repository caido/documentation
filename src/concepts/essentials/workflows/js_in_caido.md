# JavaScript in Caido

## TypeScript

[TypeScript](https://www.typescriptlang.org/) is referred to as **superset** of JavaScript. A superset builds upon a programming language, adding additional capabilities.

JavaScript is a [dynamically typed language](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing), meaning that entities do not have a fixed data type and can hold values of any data type. The data type is determined at runtime based on the assigned values. However, specific data types for entities may be required for code to run properly.

With TypeScript, you can assign a data type to an entity - this process is known as adding a [type annotation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions). By assigning what data type an entity can use, you ensure that the intended input is supplied come runtime.

TypeScript builds upon JavaScript by introducing **static analysis** which will parse your code and notify you of any errors before running or compiling your code.

::: tip
Example:

```ts
function addNumbers(a: number, b: number): number {
    return a + b;
};

const result = addNumbers(2, "Hello world!");
```

In this example:

- The `addNumbers` function takes two parameters (`a` and `b`).
- Both `a` and `b` have a type annotation of `number` (applied using the syntax `entity: type`) - they each must have a value that is either an integer or float.
- The return value is of type `number` (applied using the syntax `: return data type`).
- Parameter `b` in the function call stored in the `result` variable has a string type value of `"Hello world!"` which is invalid.
- With static analysis, you will receive the following error **before** the function is even ran: `Argument of type 'string' is not assignable to parameter of type 'number'.`
:::

This verification that the correct data type is used is known as **static type-checking**.

::: info
The data types that Workflows use are: bytes, strings, Boolean values, integers, request objects and response objects.
:::

## Defining Custom Types with TypeScript

With TypeScript, you can **also** create custom data types. This is accomplished by defining the custom data types in what is known as a [declaration file](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html) (_TypeScript declaration files have the `.d.ts` extension_).

Within a declaration file, you will find declared [type aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases) and [classes](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#classes) (_among other entities_).

::: info
The `export declare` syntax in TypeScript is used to provide type definitions or declarations for external entities.
:::

### Type Aliases

When you declare a type alias, you are able to define the type/s that an entity should have.

::: tip

Example:

The custom type alias definition in a TypeScript declaration file named `types.d.ts` is as follows:

```ts
export declare type Account = {
    username: string;
    age: number;
    isVerified?: boolean;
};
```

The external object entity in a TypeScript file named `script.ts` is as follows:

```ts
const account: Account = {
    username: 'ninjeeter',
    age: 35
};
```

In this example:

- The type alias of `Account` defines that the `username` property should be of type `string`, the `age` property should be of type `number` and the `isVerified` property is optional (denoted by the `?`), but if it is present, it should be of type `boolean`.
- The object in the external file `script.ts` has the `Account` type alias (applied using the syntax `entity: Alias`).
- The `account` object passes static type-checking since the property values are all type valid.
:::

### Classes

When you declare a custom class type, you are able to define an object's:

- `Constructor`: A special method used to create an `instance` of the class. An instance is simply a new object that inherits the properties and methods that are included in that class. The constructor's parameter/s used to initialize the object and its property/properties or set its initial state can be type annotated.
- `Properties`: The characteristics of the object class, of which you can add type annotation.
- `Methods`: The functions that perform actions/calculations using the object's properties and other logic. You can add [type annotation to the function parameter/s](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#parameter-type-annotations) as well as the [return value](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#return-type-annotations).

::: tip
Example:

The custom class type definition in a TypeScript declaration file named `types.d.ts` is as follows:

```ts
export declare class WelcomeMessage {
    constructor(username: string);
    greet(userId: number): void;
};
```

The method function code in an external TypeScript file named `greetFunction.ts` is as follows:

```ts
export function greet(userId: number): void {
    console.log(`Welcome User ${userId}!`);
}
```

The usage of the object entity in an external TypeScript file named `script.ts` is as follows:

```ts
import {greet} from './greetFunction.ts';

const obj: WelcomeMessage = new WelcomeMessage("ninjeeter");

obj.greet(123);
```

In this example:

In the `types.d.ts` file:

- The custom class type definition of `WelcomeMessage` defines that the `username` parameter of the constructor method should be of type `string`.
- The `userId` parameter should be of type `number`. This parameter is used as an argument of the `greet()` method that is included in the object class.

---

In the `greetFunction.ts` file:

- The `greet()` method function code defines that the return value is `void` (applied using the syntax `: return data type`), since no value is returned but rather printed to the console using `console.log`.

---

In the `script.ts` file:

- The `greet()` function is imported from the `greetFunction.ts` file.
- A new variable named `obj` is annotated to be of `WelcomeMessage` type (applied using the syntax `name: type`).
- The constructor method is called and the static type-checking passes since a valid `string` type is supplied. A new object of the `WelcomeMessage` class is created.
- The `greet()` method is called on the `obj` variable that stores the instance. The parameter value supplied of `123` satisfies the `number` type requirement.
- The following message is printed to the console: `Welcome User 123!`
:::

## QuickJS

Caido uses the [QuickJS Engine](https://github.com/bellard/quickjs) to handle any JavaScript code it receives. Without implementing an engine - Caido would not be able to utilize JavaScript for creating Workflows.

Caido leverages the QuickJS Engine to:

1. Identify that the received input is JavaScript code.
2. Parse and interpret the code.
3. Run the code - performing the actions and computations within it.

::: warning NOTE
As QuickJS is a lightweight, embeddable JavaScript engine - it does NOT have built-in support for TypeScript.
:::

## JSDoc

Since JavaScript does not support type annotation due to it being a dynamically typed language.
You can use JSDoc comment syntax in order to assign a type to a parameter.

```
/**
 * @param {Bytes} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data>}
 */
export function run(input, sdk) {
  let parsed = sdk.asString(array)
  sdk.console.log(parsed);
  return parsed;
};
```

Where the value inside the {} is the custom type.
Then, by looking at the .d.ts file - you can view which methods are available to be called upon that custom type tied to the parameter.
So, since `console` under the custom created SDK type is tied to the custom created `Console` type - using regular type assignment syntax of `console: Console` - and this is listed as a method of SDK - all the methods of Console are available to SDK.

‘any’ accounts for any data type. `void` means nothing is returned (it is just printed to the console)

 If a parameter does not receive a specific value, the function within the Node will fail.

 This definition file is part of an SDK. ADD THIS TO AN SDK SECTION IN THIS FILE
