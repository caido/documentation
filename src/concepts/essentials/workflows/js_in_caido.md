# JavaScript in Caido

_Below includes in-depth foundational information, to skip to usage of JavaScript in Workflow Nodes - navigate to the [JavaScript Node Functions](#javascript-node-functions) section._

## TypeScript

[TypeScript](https://www.typescriptlang.org/) is referred to as **superset** of JavaScript. A superset builds upon a programming language, adding additional capabilities.

JavaScript is a [dynamically typed language](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing), meaning that entities do not have a fixed data type and can hold values of any data type. The data type is determined at runtime based on the assigned values. However, specific data types for entities may be required for code to run properly.

With TypeScript, you can assign a data type to an entity - this process is known as [type annotation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions). By assigning what data type an entity can use, you ensure that the intended input is supplied come runtime.

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

- The type alias of `Account` defines that the `username` property should be of type `string`, the `age` property should be of type `number` and the `isVerified` property is optional (denoted by the `?`), but if it is present, should be of type `boolean`.
- The object in the external file `script.ts` has the `Account` type alias (applied using the syntax `entity: Alias`).
- The `account` object passes static type-checking since the property values are all valid types.
:::

### Classes

When you declare a custom class type, you are able to define an object's:

- `Constructor`: A special method used to create an `instance` of the class. An instance is simply a new object that inherits the properties and methods that are included in that class. The constructor's parameter/s, used to initialize the object and its property/properties or set its initial state, can be type annotated.
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
- The object has the `WelcomeMessage` type (applied using the syntax `entity: type`).
- The constructor method is called and the static type-checking passes since a valid `string` type value is supplied. A new object of the `WelcomeMessage` class is created.
- The `greet()` method is called on the `obj` variable that stores the instance. The parameter value of `123` satisfies the `number` type requirement.
- The following message is printed to the console: `Welcome User 123!`
:::

::: info
The constructor parameter used to create the instance will become a property. In the above example, if you used `console.log(obj.username)`, the output would be as follows:

```
“ninjeeter”
```

:::

## SDK

For simplicity, in Caido when referring to the SDK - we are speaking of the methods that allow a JavaScript program ran in a JavaScript Node to interact with the rest of Caido backend.

These methods are the ones included within the SDK object:

```ts
export declare type SDK = {
  console: Console;
  findings: FindingsSDK;
  requests: RequestsSDK;
  asString(array: Bytes): string;
};
```

::: info
The SDK object inherits all the methods of `Console`, `FindingsSDK` and `RequestsSDK`.
:::

This SDK object is the second parameter of the `run` function used by the JavaScript Node in Workflows.

::: tip Convert Type JavaScript Node Function

```js
export function run(input, sdk) {
  let parsed = sdk.asString(array)
  sdk.console.log(parsed);
  return parsed;
};
```

:::

::: tip Passive & Active Type JavaScript Node Function

```js
export async function run({ request, response }, sdk) {
  if (request) {
    let host = request.getHost();
    sdk.console.log(host);
  }
}
```

:::

## QuickJS

Caido uses the [QuickJS Engine](https://github.com/bellard/quickjs) to handle any JavaScript code it receives. Without implementing an engine - Caido would not be able to utilize JavaScript for creating [Workflows](/concepts/essentials/workflows.md).

Caido leverages the QuickJS Engine to:

1. Identify that the received input is JavaScript code.
2. Parse and interpret the code.
3. Run the code - performing the actions and computations within it.

::: warning NOTE
As QuickJS is a lightweight, embeddable JavaScript engine - it **does not** have built-in support for TypeScript.
:::

## JSDoc

[JSDoc](https://jsdoc.app/) comment syntax provides a way to document JavaScript code using special comment annotations.

JSDoc comments start with  `/**` and end with `*/`. Within these comment blocks, you can use various tags and annotations to provide specific information about the code element being documented.

::: info
Some commonly used JSDoc tags include:

- @param: Describes the parameters accepted by a function, including their names, types, and descriptions.

- @returns: Describes the return value of a function, including its type and description.

- @type: Specifies the data type of a variable or property.

:::

Below is the `run` function used by the JavaScript Convert Node - this time with the JSDoc comment type annotations included:

::: tip Convert Type Function

```js
/**
 * @param {Bytes} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data>}`
 */
export function run(input, sdk) {
  let parsed = sdk.asString(array)
  sdk.console.log(parsed);
  return parsed;
};
```

The value inside the `{}` is the type.
:::

Using the comments as reference, you can view the declaration file to determine which methods are available to be called upon.

::: warning NOTE
JSDoc comments for function parameters do not directly assign types to the parameters themselves. Meaning they will not enforce or assign types during runtime. However they are used in Caido to provide autocompletion. As well as providing you with a reference.
:::

<img alt="SDK autocomplete." src="/_images/sdk_autocomplete.png">

## JavaScript Node Functions

When a JavaScript Node is executed inside a [Workflow](/concepts/essentials/workflows.md), one of two functions is ran - depending on the [Workflow Type](/concepts/essentials/workflows.html#workflow-types).

### Convert Type JavaScript Node Function

```js
/**
 * @param {BytesInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data>}
 */
export function run(input, sdk) {
  let parsed = sdk.asString(input);
  sdk.console.log(parsed);
  return parsed;
}
```

::: tip Function Breakdown & Declaration Associations

The JSDoc comment uses type tags to note what types are assigned to the function parameters:

```
/**
 * @param {BytesInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data>}
 */
 ```

 The `input` parameter type is of type `BytesInput`. The `sdk` parameter is of the object type `SDK`. The associated declarations are:

 ```ts
 export declare type BytesInput = Array<number>;

 export declare type SDK = {
  console: Console;
  findings: FindingsSDK;
  requests: RequestsSDK;
  asString(array: Bytes): string;
};
 ```

The return value is of type `MaybePromise<Data>`. This type allows the handling of both synchronous and asynchronous functions. The value between the angle brackets `<>` is a placeholder for another type. `Data` is the type used which itself has a type of `Bytes` which can be of data types `string`, `Array<number>`, or `Uint8Array`. The associated declarations are:

```ts
export declare type MaybePromise<T> = T | Promise<T>;

export declare type Data = Bytes;

export declare type Bytes = string | Array<number> | Uint8Array;
```

The `run` function is available to be imported in external scripts. The function takes two parameters: `input` and `sdk`.

The variable `parsed` stores `sdk.asString(input)` to convert bytes into a string.

The `SDK` object assigned to `sdk` then uses the `console.log` method that it inherited from the `Console` object. This method is called on the `parsed` variable. The value of `parsed` will be printed to the [backend logs](/concepts/internals/files.md) The associated declaration is:

```ts
export declare type Console = {
  debug(message: any): void;
  log(message: any): void;
  warn(message: any): void;
  error(message: any): void;
};
```

Finally, `return parsed` returns the string converted data.

 :::

### Passive & Active Type JavaScript Node Function

```js
/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
  if (request) {
    let host = request.getHost();
    sdk.console.log(host);
  }
}
```

::: tip Function Breakdown & Declaration Associations

The JSDoc comment uses type tags to note what types are assigned to the function parameters:

```
/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
```

 The `input` parameter type is of the object type `HttpInput`. The `sdk` parameter is of the object type `SDK`. The associated declarations are:

```ts
export declare type HttpInput = {
  request: Request | undefined;
  response: Response | undefined;
};

export declare type Request = {
  getId(): ID;
  getHost(): string;
  getPort(): number;
  getTls(): boolean;
  getMethod(): string;
  getPath(): string;
  getQuery(): string;
  getHeaders(): Record<string, Array<string>>;
  getHeader(name: string): Array<string> | undefined;
  getBody(): Body | undefined;
  toSpec(): RequestSpec;
  toSpecRaw(): RequestSpecRaw;
};

export declare type Response = {
  getId(): ID;
  getCode(): number;
  getHeaders(): Record<string, Array<string>>;
  getHeader(name: string): Array<string> | undefined;
  getBody(): Body | undefined;
};

 export declare type BytesInput = Array<number>;

 export declare type SDK = {
  console: Console;
  findings: FindingsSDK;
  requests: RequestsSDK;
  asString(array: Bytes): string;
};
```

The return value is of union type `MaybePromise<Data | undefined>` due to the function being asynchronous. This type allows the handling of both synchronous and asynchronous functions. The value between the angle brackets `<>` separated by the `|` holds two types - `Data` OR `undefined`. `Data` type has a type of `Bytes` which can be of data types `string`, `Array<number>`, or `Uint8Array`. A resolved promise is returned as `Data`. OR the return value can be `undefined` if the promise is rejected. The associated declarations are:

```ts
export declare type MaybePromise<T> = T | Promise<T>;

export declare type Data = Bytes;

export declare type Bytes = string | Array<number> | Uint8Array;
```

The `run` function is available to be imported in external scripts. The function takes two parameters: `input` and `sdk`.

If the `request` exists (_evaluates to true_) - the `getHost()` method is called on it. This is stored in the `host` variable.

The `SDK` object assigned to `sdk` then uses the `console.log` method that it inherited from the `Console` object. This method is called on the `host` variable. The associated declaration is:

```ts
export declare type Console = {
  debug(message: any): void;
  log(message: any): void;
  warn(message: any): void;
  error(message: any): void;
};
```

Finally, the value of `host` will be printed to the [backend logs](/concepts/internals/files.md).

:::

## Examples

### Allowed Methods

The following program will take proxied request objects, convert them from their immutable state into a mutable state and resend the request to the host utilizing different HTTP Methods. The status code and body size of each requests' response will be published as a [Finding](/reference/features/logging/findings.md).

```js
export async function run({ request, response }, sdk) {
  if (request) {
    let findingDes = ""
    const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    const spec = request.toSpec();
    if (spec.getMethod() != "GET"){
      spec.setBody("", {updateContentLength: true})
    }
  
    for (let i=0; i < methods.length; i++){
      spec.setMethod(methods[i])
      let res = await sdk.requests.send(spec)
      let resLength = res.response.getBody().toText().length
      findingDes += `METHOD: ${methods[i]}\nStatus Code: ${res.response.getCode()}\nContent-Length: ${resLength}\n\n`
    }
    let finding = {
      title: `Allowed Methods For: https://${spec.getHost() + spec.getPath()}`,
      description: findingDes,
      reporter: "Allowed Methods",
      request: request
    }
    await sdk.findings.create(finding)
  }
}
```

::: tip Function Breakdown

```js
export async function run({ request, response }, sdk) {
  if (request) {
    let findingDes = ""
    const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    const spec = request.toSpec();
    if (spec.getMethod() != "GET"){
      spec.setBody("", {updateContentLength: true})
    }
```

Within the above code block:

- The asynchronous `run` function is created and is available to be imported in other scripts.
- The first parameter of the function is a `request` object and `response` object pair. The second parameter of the function is the `SDK` object - used to interact with Caido's backend.
- A variable named `findingDes` is declared - this will eventually store a string value that will be used for the Finding's description.
- An array of HTTP Methods is stored in the variable `methods`.
- The immutable request object that was proxied is converted to a mutable request object using the `toSpec()` method and stored in the variable `spec`.
- If the HTTP Method used is not `GET` - the Content-Length header is to be automatically updated to match the true size.

```js
for (let i=0; i < methods.length; i++){
      spec.setMethod(methods[i])
      let res = await sdk.requests.send(spec)
      let resLength = res.response.getBody().toText().length
      findingDes += `METHOD: ${methods[i]}\nStatus Code: ${res.response.getCode()}\nContent-Length: ${resLength}\n\n`
    }
```

Within the above code block:

- Each HTTP Method included in the array is set in the request object using the `setMethod()` method.
- The requests are sent using `sdk.requests.send(spec)`.
- For each request sent, the response is the awaited promise and will be stored in the `res` variable once resolved.
- The response body is converted to a string from bytes and then the length is evaluated.
- The value stored in the `findingDes` variable that was declared earlier is updated to include the HTTP Method used as well as both the status code and body size of the associated response.

```js
let finding = {
      title: `Allowed Methods For: https://${spec.getHost() + spec.getPath()}`,
      description: findingDes,
      reporter: "Allowed Methods",
      request: request
    }
```

Within the above code block:

- A Finding object is declared. The properties of the object are stored in the `finding` variable.
- The value of the `title` property will be the URL the request was sent to. Derived from the `getHost()` and `getPath()` methods called on the request object.
- The value of the `description` property will be the value of the `findingDes` variable.
- The value of the `reporter` property will be `"Allowed Methods"` - identifying the producing source the Finding.
- The value of the `request` property will be the request object.

```js
await sdk.findings.create(finding)
```

In the above code line:

- The `sdk.findings.create()` method is called using the `finding` variable as it's parameter.
- This call will await the completion of the creation process of the `finding` object and then creates a new finding with it in the Caido interface.
:::
