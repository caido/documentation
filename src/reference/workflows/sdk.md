# SDK

## SDK

The `SDK` object is an interface that provides access to various services and functionalities.

```ts
export declare type SDK = {
  console: Console;
  findings: FindingsSDK;
  requests: RequestsSDK;
  asString(array: Bytes): string;
};
```

#### `console: Console;`

- The [Console](#console) object for logging.

#### `findings: FindingsSDK;`

- The [FindingsSDK](#findingssdk) for interacting with Findings.

#### `requests: RequestsSDK;`

- The [RequestsSDK](#requestssdk) for interacting with requests.

::: tip
Example:

```js
const spec = new RequestSpec(`"https://example.com"`);
sdk.requests.send(spec)
  .then((res) => {
    sdk.console.log(res.request.getId());
    sdk.console.log(res.response.getCode());
  })
  .catch((err) => {
    sdk.console.error(err);
  });
```

:::

#### `asString(array: Bytes): string;`

- A helper function that converts Bytes (`string/Array<number>/Uint8Array`) to a string, replacing unprintable characters with `�`.

::: tip
Example:

```js
export function run(input, sdk) {
  let parsed = sdk.asString(input);
  sdk.console.log(parsed);
  return parsed;
}
```

:::

## RequestsSDK

- The `RequestsSDK` type interface provides methods in order to interact with requests.

```ts
export declare type RequestsSDK = {
  send(request: RequestSpec | RequestSpecRaw): Promise<RequestResponse>;
  inScope(request: Request | RequestSpec): boolean;
};
```

#### `send(request: RequestSpec | RequestSpecRaw): Promise<RequestResponse>;`

- This method will send an HTTP request. The `request` parameter type is a [RequestSpec](#requestspec) object class instance OR a [RequestSpecRaw](#requestspecraw) object class instance. The return type is a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves as a [RequestResponse](#response-response) pair. An error is logged if the request cannot be sent.

::: tip TIPS

```js
const spec = new RequestSpec(`"https://example.com"`);
sdk.requests.send(spec)
  .then((res) => {
    sdk.console.log(res.request.getId());
    sdk.console.log(res.response.getCode());
  })
  .catch((err) => {
    sdk.console.error(err);
  });
```

In this example:

- The `res` variable stores the resolved value of the Promise returned by `sdk.requests.send(spec)`.
- Upon successful resolution of the Promise, the request ID and response code will be printed as an entry to the backend log file using `sdk.console.log`.
- If the request failed, an error message will be printed as an entry to the backend log file using `sdk.console.log`.
:::

#### `inScope(request: Request | RequestSpec): boolean;`

This method will use the `request` parameter with a type of [Request](#request) OR [RequestSpec](#requestspec) to check if the request is in-scope or out-of-scope based on the `boolean` type return value of `true` or `false` (respectively).

::: tip TIPS
Example:

```js
if (sdk.requests.inScope(request)) {
  sdk.console.log("In scope");
};
```

In this example:

- The Boolean value will be printed as an entry to the backend log file using `sdk.console.log`.
:::

## FindingsSDK

- The `FindingsSDK` type interface provides a method to create a new Finding.

```ts
export declare type FindingsSDK = {
  create(spec: FindingSpec): Promise<Finding>;
};
```

#### `create(spec: FindingSpec): Promise<Finding>;`

- This method will use the `spec` parameter with a type of [FindingSpec](#findingspec). The return type is a Promise (since the function is asynchronous) that resolves as [Finding](#finding).

::: tip
Example:

```ts
sdk.findings.create({
  title: "Title",
  description: "Description",
  reporter: "Reporter",
  request,
});
```

:::

---

# Types

## Console

The `Console` interface defines log printing methods. Currently, logs are only available in the [backend logs](/reference/configuration/data_location.md).

```ts
export declare type Console = {
  debug(message: any): void;
  log(message: any): void;
  warn(message: any): void;
  error(message: any): void;
};
```

::: info
The definition syntax is as follows: `method`(`parameter`: `type`): `return type`;

The `message` parameter can accept `any` value type. The return type is `void` since no value is returned (_messages are simply logged_).
:::

#### `debug(message: any): void;`

- This will add a debug message entry to the backend logs for troubleshooting purposes.

#### `log(message: any): void;`

- This will add a general message entry to the backend logs.

#### `warn(message: any): void;`

- This will add a warning message entry to the backend logs for the identification of unexpected occurrences.

#### `error(message: any): void;`

- This will add an error message entry to the backend logs for troubleshooting more critical issues.

## Body

The `Body` class interface defines the structure and methods for the data body of requests and responses. This object class represents the body content of an HTTP request/response and provides methods for accessing and manipulating the data within it.

```ts
export declare class Body {
  constructor(data: string | Array<number> | Uint8Array);
  toText(): string;
  toJson(): any;
  toRaw(): Uint8Array;
};
```

::: info
The definition syntax is as follows: `method`(): `return data type`;

The `constructor` creates an instance of the class. The `data` parameter can be of type `string` OR `Array<number>` OR `Uint8Array`.
:::

::: tip
Examples:

```js
const body = new Body("Hello world.");
const body = new Body([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 46]);
const body = new Body(new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 46]));
```

Will all create a body of `Hello world.`
:::

#### `toText(): string;`

- This method will convert the body data into a `string`. Unprintable characters will be replaced with `�`.

#### `toJson(): any;`

- This method will parse the body data as JSON and returns an object of `any` type. If the body data is not valid JSON - a `SyntaxError` will be logged automatically and the Workflow will fail.

#### `toRaw(): Uint8Array;`

- This method will convert the raw body data into a `Uint8Array`.

## Request

The `Request` type interface represents a saved **immutable** HTTP request object and provides methods for accessing the data within it.

```ts
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
```

#### `getId(): ID;`

- This method will return the `ID` - a unique numerical identifier of the request.

#### `getHost(): string;`

- This method will return the `host` of the request in type `string`.

#### `getPort(): number;`

- This method will return the `port` that the request was sent to in type `number`.

#### `getTls(): boolean;`

- This method will return a `boolean` (true/false) value type - indicating whether the request was sent using TLS encryption (HTTPS).

#### `getMethod(): string;`

- This method will return the HTTP `Method` that the request utilized in type `string`.

#### `getPath(): string;`

- This method will return the `path` of the request URL in type `string`.

#### `getQuery(): string;`

- This method will return the `query` of the request URL in type `string`.

#### `getHeaders(): Record<string, Array<string>>;`

- This method returns an object representing the `headers` of the request. The `key` of the returned object is the header name in type `string`. The returned `value` of the key is type `Array<string>` since headers can contain multiple values

::: info
The definition syntax is as follows: `Record`<`key`, `value`>;

`Record` allows you to define a mapped-object type by specifying key-value pairs.
:::

::: tip
Example:

```js
const headers = request.getHeaders();
sdk.console.log(headers);
```

_Returns:_

```
{
  "Host": ["caido.io"],
  "Connection": ["keep-alive"],
  "Content-Length": ["95"],
  ...
}
```

:::

#### `getHeader(name: string): Array<string> | undefined;`

- This method will return the value of a specified `header` in the request. The `name` parameter value is the header name in type `string`. The returned `value` is type `Array<string>` since the header can contain multiple values OR is of type `undefined` when there is an absence of a value (_the specified header isn't present in the request_).

::: info
The definition syntax is as follows: `method`(`parameter`: `type`): `return type` OR `return type`;
:::

::: tip
Example:

```js
const header = request.getHeader("Content-Type");
sdk.console.log(header);
```

_Returns:_

["application/json"]
:::

#### `getBody(): Body | undefined;`

- This method will return the request `body` as a [Body instance](#body) OR `undefined` if no body exists.

::: tip
Example:

```js
const body = request.getBody();
const bodyContent = body.toText();
sdk.console.log(bodyContent);
```

The backend logs will have an entry containing the body data of the request.
:::

#### `toSpec(): RequestSpec;`

- This method returns a [RequestSpec](#requestspec) object that represents a **mutable** version of the request. This now enables you to make modifications to the request (_which was not possible before since the saved request from which `toSpec()` sources from is immutable which is why the majority of the methods available return data - not alter data_).

::: info
Essentially, this method converts the `Request` object (_which cannot be modified_) into a new `RequestSpec` object than can be modified.
:::

#### `toSpecRaw(): RequestSpecRaw;`

- This method returns a [RequestSpecRaw](#requestspecraw) object that represents a **mutable** version of the request. This method differs in that it returns the request in `raw` format (_Uint8Array_).

::: info
Essentially, this method converts the `Request` object (_which cannot be modified_) into a new `RequestSpecRaw` object (_the request is now represented in 8-bit unsigned integers_) than can be modified.
:::

## RequestSpec

The `RequestSpec` class interface defines the structure and methods for a request that has **not yet been sent** (_as opposed to the **saved** request used by [Request](#request)_). This object class represents a mutable HTTP request and provides methods for accessing and manipulating the data within it.

```ts
export declare class RequestSpec {
  constructor(url: string);
  getHost(): string;
  setHost(host: string): void;
  getPort(): number;
  setPort(port: number): void;
  getTls(): boolean;
  setTls(tls: boolean): void;
  getMethod(): string;
  setMethod(method: string): void;
  getPath(): string;
  setPath(path: string): void;
  getQuery(): string;
  setQuery(query: string): void;
  getHeaders(): Record<string, Array<string>>;
  getHeader(name: string): Array<string> | undefined;
  setHeader(name: string, value: string): void;
  removeHeader(name: string): void;
  getBody(): Body | undefined;
  setBody(body: Body | Bytes, options?: SetBodyOptions): void;
  setRaw(raw: Bytes): RequestSpecRaw;
};

type SetBodyOptions = {
  updateContentLength: boolean;
};
```

::: info
The `constructor` creates an instance of the class. The `url` parameter can be of type `string`.
:::

::: tip TIPS

- You can convert a saved immutable [Request](#request) object into a RequestSpec object by using the `toSpec()` method. _Example_: `request.toSpec();`
- The default HTTP Method utilized is GET.
- You can include the schema, host and port to the URL (_path and query are not supported_) - allowing you to easily prepopulate some of the properties.
- Once initialized (_by supplying the constructor URL_), the `host` component is extracted from the URL and used internally within the RequestSpec class. To explicitly change the host, see the `setHost(host: string): void;` method below.
:::

#### `getHost(): string;`

- This method will return the `host` of the request in type `string`.

#### `setHost(host: string): void;`

- This method explicitly sets the host of the request in the case you want to change it. The `host` parameter value is the domain name (_including subdomains, if any_) in type `string`. The return type is `void` as no value is returned.

::: info
The `setHost()` method of `RequestSpec` will apply to **both** the Host header of the request **and** the connection parameter of the TCP stream.
:::

::: tip
Example:

```js
const request = new RequestSpec("https://example.com");
request.setHost("https://dashboard.caido.io"):
```

The request's target host of `https://example.com` will be replaced with `https://dashboard.caido.io`.
:::

#### `getPort(): number;`

- This method will return the `port` that the request was sent to in type `number`.

#### `setPort(port: number): void;`

- This method sets the port of the request. The `port` parameter value is of type `number`. The return type is `void` as no value is returned.

#### `getTls(): boolean;`

- This method will return a `boolean` (true/false) value type - indicating whether the request was sent using TLS encryption (HTTPS).

#### `setTls(tls: boolean): void;`

- This method configures the request to utilize a TLS connection or not. The `tls` parameter value is of type `boolean` (true/false). The return type is `void` as no value is returned.

#### `getMethod(): string;`

- This method will return the HTTP `Method` that the request utilized in type `string`.

#### `setMethod(method: string): void;`

- This method specifies the HTTP Method of the request. The `method` parameter value is of type `string`. The return type is `void` as no value is returned.

#### `getPath(): string;`

- This method will return the `path` of the request URL in type `string`.

#### `setPath(path: string): void;`

- This method sets the URL path of the request. The `path` parameter value is of type `string`. The return type is `void` as no value is returned.

#### `getQuery(): string;`

- This method will return the `query` of the request URL in type `string`.

#### `setQuery(query: string): void;`

- This method sets the URL query of the request. The `query` parameter value is of type `string`. The return type is `void` as no value is returned.

#### `getHeaders(): Record<string, Array<string>>;`

- This method returns an object representing the `headers` of the request. The `key` of the returned object is the header name in type `string`. The returned `value` of the key is type `Array<string>` since headers can contain multiple values

::: info
The definition syntax is as follows: `Record`<`key`, `value`>;

`Record` allows you to define a mapped-object type by specifying key-value pairs.
:::

::: tip
Example:

```js
const headers = request.getHeaders();
sdk.console.log(headers);
```

_Returns:_

```
{
  "Host": ["caido.io"],
  "Connection": ["keep-alive"],
  "Content-Length": ["95"],
  ...
}
```

:::

#### `getHeader(name: string): Array<string> | undefined;`

- This method will return the value of a specified `header` in the request. The `name` parameter value is the header name in type `string`. The returned `value` is type `Array<string>` since the header can contain multiple values OR is of type `undefined` when there is an absence of a value (_the specified header isn't present in the request_).

::: info
The definition syntax is as follows: `method`(`parameter`: `type`): `return type` OR `return type`;
:::

::: tip
Example:

```js
const header = request.getHeader("Content-Type");
sdk.console.log(header);
```

_Returns:_

```
["application/json"]
```

:::

#### `setHeader(name: string, value: string): void;`

- This method sets an HTTP header. The `name` parameter value is the header name in type `string`. The `value` parameter takes the header value in type `string`. The return type is `void` as no value is returned.

#### `removeHeader(name: string): void;`

- This method removes a HTTP header. The `name` parameter value is the header name in type `string`. The return type is `void` as no value is returned.

#### `getBody(): Body | undefined;`

- This method will return the request `body` as a [Body](#body) object class instance OR `undefined` if no body exists.

::: tip
Example:

```js
const body = request.getBody();
const bodyContent = body.toText();
sdk.console.log(bodyContent);
```

The backend logs will have an entry containing the body data of the request.
:::

#### `setBody(body: Body | Bytes, options?: SetBodyOptions): void;`

- This method sets the body of the request. The `body` parameter type is a [Body](#body) object class instance OR its value can be of type `string/Array<number>/Uint8Array`. The `?` in `options?` signifies that the parameter is optional. `options` is of type `SetBodyOptions` (_see directly below_).

::: tip
Example:

```ts
const body = new Body("Hello world.");
const options: SetBodyOptions = {updateContentLength: true;};
request.setBody(body, options);
```

:::

#### type SetBodyOptions = {updateContentLength: boolean;};

- This type definition introduces the ability to update the Content-Length header value of a request (_for example, to match the size when considering the addition of payloads_) or not.

::: info
updateContentLength is `true` by default.
:::

::: tip
Example:

```ts
const body = new Body("Hello world.");
const options: SetBodyOptions = {updateContentLength: true;};
request.setBody(body, options);
```

:::

#### `setRaw(raw: Bytes): RequestSpecRaw;`

- This method sets the raw bytes of the request. The `raw` parameter can be of type `Bytes` (`string/Array<number>/Uint8Array`).  The return type is a [RequestSpecRaw](#requestspecraw) object which represents the raw request.

::: info
Essentially, this method converts the `RequestSpec` object into a new `RequestSpecRaw` object (_the request is now represented in 8-bit unsigned integers_) than can be modified.
:::

::: tip TIPS
This method is useful when you have a pre-existing byte representation of an HTTP request and want to set it directly without individually setting the properties (_such as the HTTP Method, headers, the body, etc._).

Example:

```js
const rawBytes = [/*RAW BYTE ARRAY OF REQUEST INSERTED HERE*/];
const request = new RequestSpec(`"https://example.com"`);
const rawRequest = request.setRaw(rawBytes);
```

In this example:

- A request, represented as a raw byte array, is supplied and stored in the `rawBytes` variable.
- A new mutable request object is created and stored in the `request` variable.
- The raw byte array of the request stored in `rawBytes` is applied to the newly created request object stored in `request`.
- Returned is the `RequestSpecRaw` class object that represents the raw request.

:::

## RequestSpecRaw

The `RequestSpecRaw` class interface defines the structure and methods for a request that has **been set using the `setRaw()` method of the [RequestSpec](#requestspec) class**. This object class represents a mutable raw HTTP request and provides methods for accessing and manipulating the raw bytes within it.

```ts
export declare class RequestSpecRaw {
  constructor(url: string);
  getHost(): string;
  setHost(host: string): void;
  getPort(): number;
  setPort(port: number): void;
  getTls(): boolean;
  setTls(tls: boolean): void;
  getRaw(): Uint8Array;
  setRaw(raw: Bytes): void;
};
```

::: info
The `constructor` creates an instance of the class. The `url` parameter can be of type `string`.
:::

#### `getHost(): string;`

- This method will return the `host` of the request in type `string`.

#### `setHost(host: string): void;`

- This method explicitly sets the host of the request in the case you want to change it. The `host` parameter value is the domain name in type `string`. The return type is `void` as no value is returned.

::: info
The `setHost()` method of `RequestSpecRaw` will apply **only** to the connection parameter of the TCP stream.
:::

#### `getPort(): number;`

- This method will return the `port` that the request was sent to in type `number`.

#### `setPort(port: number): void;`

- This method sets the port of the request. The `port` parameter value is of type `number`. The return type is `void` as no value is returned.

#### `getTls(): boolean;`

- This method will return a `boolean` (true/false) value type - indicating whether the request was sent using TLS encryption (HTTPS).

#### `setTls(tls: boolean): void;`

- This method configures the request to utilize a TLS connection or not. The `tls` parameter value is of type `boolean` (true/false). The return type is `void` as no value is returned.

#### `getRaw(): Uint8Array;`

- This method will return the raw `body` of the request in type `Uint8Array`.

#### `setRaw(raw: Bytes): void;`

- This method sets the raw bytes of the request. The `raw` parameter can be of type `Bytes` (`string/Array<number>/Uint8Array`).

## Response

The `Response` type interface represents a saved **immutable** HTTP response object and provides methods for accessing the data within it.

```ts
export declare type Response = {
  getId(): ID;
  getCode(): number;
  getHeaders(): Record<string, Array<string>>;
  getHeader(name: string): Array<string> | undefined;
  getBody(): Body | undefined;
};
```

#### `getId(): ID;`

- This method will return the `ID` - a unique numerical identifier of the response.

#### `getCode(): number;`

- This method will return the `HTTP Status Code` of the response in type `number`.

#### `getHeaders(): Record<string, Array<string>>;`

- This method returns an object representing the `headers` of the response. The `key` of the returned object is the header name in type `string`. The returned `value` of the key is type `Array<string>` since headers can contain multiple values

::: info
The definition syntax is as follows: `Record`<`key`, `value`>;

`Record` allows you to define a mapped-object type by specifying key-value pairs.
:::

::: tip
Example:

```js
const headers = response.getHeaders();
sdk.console.log(headers);
```

_Returns:_

```
{
  "Date": ["Sun, 26 May 2024 10:59:21 GMT"],
  "Content-Type": ["text/html"]
  ...
}
```

:::

#### `getHeader(name: string): Array<string> | undefined;`

- This method will return the value of a specified `header` in the response. The `name` parameter value is the header name in type `string`. The returned `value` is type `Array<string>` since the header can contain multiple values OR is of type `undefined` when there is an absence of a value (_the specified header isn't present in the response_).

::: info
The definition syntax is as follows: `method`(`parameter`: `type`): `return type` OR `return type`;
:::

::: tip
Example:

```js
const header = response.getHeader("Content-Type");
sdk.console.log(header);
```

_Returns:_

["text/html"]
:::

#### `getBody(): Body | undefined;`

- This method will return the response `body` as a [Body instance](#body) OR `undefined` if no body exists.

::: tip
Example:

```js
const body = response.getBody();
const bodyContent = body.toText();
sdk.console.log(bodyContent);
```

The backend logs will have an entry containing the body data of the response.
:::

## RequestResponse

- The `RequestResponse` type interface represents a saved **immutable** HTTP request **and** its associated saved **immutable** response as a pair. All of the methods available to the respective objects are available to use.

```ts
export declare type RequestResponse = {
  request: Request;
  response: Response;
};
```

#### `request: Request;`

- `request` stores the [Request](#request) object.

#### `response: Response;`

- `response` stores the [Response](#response) object.

## Finding

The `Finding` type interface represents a saved **immutable** Finding.

```ts
export declare type Finding = {
  getId(): ID;
  getTitle(): string;
  getDescription(): string | undefined;
  getReporter(): string;
};
```

#### `getID(): ID;`

- This method will return the `ID` - a unique numerical identifier of the Finding.

#### `getTitle(): string;`

- This method will return the `Title` of the Finding in type `string`. The Title is associated with the Finding entry and is usually used as a label.

#### `getDescription(): string | undefined;`

- This method will return the `Description` of the Finding in type `string` OR `undefined` if no description exists. The Description is optional and provides details on the Finding.

#### `getReporter(): string;`

- This method will return the `Reporter` of the Finding in type `string`. The Reporter identifies what discovered the Finding (_for example, the Reporter value will be the name of a Workflow_).

#### `toSpec(): FindingSpec;`

- This method returns a `FindingSpec` object that represents a mutable version of the Finding.

## FindingSpec

The `Finding` type interface represents a **mutable** Finding that has been identified and has not yet been created.

```ts
export declare type FindingSpec = {
  title: string;
  description?: string | undefined;
  reporter: string;
  request: Request;
};
```

#### `title: string;`

- The `title` property is of type `string` and is associated with the Finding entry and is usually used as a label.

#### `description?: string | undefined;`

- The `description` property is of type `string` OR `undefined` if no description exists. The Description is optional (`?`) and provides details on the Finding.

#### `reporter: string;`

- The `reporter` property is of type `string` and identifies what discovered the Finding (_for example, the Reporter value will be a Workflow_).

#### `request: Request;`

- `request` stores the [Request](#request) object.

## Others

#### `HttpInput`

```ts
export declare type HttpInput = {
  request: Request | undefined;
  response: Response | undefined;
};
```

#### `BytesInput`

```ts
export declare type BytesInput = Array<number>;
```

#### `ID`

```ts
export declare type ID = string;
```

#### `Data`

```ts
export declare type Data = Bytes;
```

#### `Decision`

```ts
export declare type Decision = boolean;
```

#### `Bytes`

```ts
export declare type Bytes = string | Array<number> | Uint8Array;
```

#### `MaybePromise<T>`

- Allows for the handling of both synchronous and asynchronous values.

```ts
export declare type MaybePromise<T> = T | Promise<T>;
```
