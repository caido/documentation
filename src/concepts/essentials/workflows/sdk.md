# SDK

The `typing.d.ts` file is the interface for Caido's SDK/API. Within it you can find the available methods. This SDK provides a simple way to interact with the Caido platform using your TypeScript or JavaScript code.

::: info
To view the **typing.d.ts** file - click [here](https://github.com/caido/sdk-workflow/blob/main/src/typing.d.ts).

Or expand the collapsible element located at the bottom of this page:
:::

## Console

The `Console` interface defines log printing methods. Currently, logs are only available in the [backend logs](/concepts/internals/files.md).

```
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

```
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

- const body = new Body("Hello world.");
- const body = new Body([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 46]);
- const body = new Body(new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 46]));

Will all create a body of `Hello world.`
:::

#### `toText(): string;`

- This method will convert the body data into a `string`. Unprintable characters will be replaced with `�`.

#### `toJson(): any;`

- This method will parse the body data as JSON and returns an object of `any` type. If the body data is not valid JSON - a `SyntaxError` will be logged automatically and the Workflow will fail.

#### `toRaw(): Uint8Array;`

- This method will convert the raw body data into a `Uint8Array`.

## Request

The `Request` type interface represents a saved **immutable** HTTP request and provides methods for accessing the data within it.

```
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

- This method will return the unique identifier of the request. The `ID` return type is numerical and represents the order of occurence in which the associated item was processed by Caido measured in time (the most recent occurence will have a greater ID number). This is the same ID property seen in the request tables throughout Caido.

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

const headers = request.getHeaders();

sdk.console.log(headers);

_Returns:_

{

  "Content-Type": ["application/json"],

  "Authorization": ["Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],

  ...

}
:::

#### `getHeader(name: string): Array<string> | undefined;`

- This method will return the value of a specified `header` in the request. The `name` parameter value is the header name in type `string`. The returned `value` is type `Array<string>` since the header can contain multiple values OR is of type `undefined` when there is an absence of a value (_the specified header isn't present in the request_).

::: info
The definition syntax is as follows: `method`(`parameter`: `type`): `return type` OR `return type`;
:::

::: tip
Example:

const header = request.getHeader("Content-Type");

sdk.console.log(header);

_Returns:_

["application/json"]
:::

#### `getBody(): Body | undefined;`

- This method will return the request `body` as a [Body instance](#body) OR `undefined` if no body exists.

#### `toSpec(): RequestSpec;`

- This method returns a `RequestSpec` object that represents a **mutable** version of the request. This now enables you to make modifications to the request (_which was not possible before since the saved request from which `toSpec()` sources from is immutable which is why the majority of the methods available return data - not alter data_).

#### `toSpecRaw(): RequestSpecRaw;`

- Similar to `toSpec(): RequestSpec;` - this method also returns a `RequestSpecRaw` object that represents a **mutable** version of the request. This method differs in that it returns the request in `raw` format (_Uint8Array_).

## SetBodyOptions

The `SetBodyOptions` type definition allows you to configure certain properties of the data body.

```
type SetBodyOptions = {
  updateContentLength: boolean;
};
```

#### type SetBodyOptions = {updateContentLength: boolean;};

- This type definition introduces the ability to update the Content-Length header value of a request (_for example, to match the size when considering the addition of payloads_) or not.

::: info
updateContentLength is `true` by default.
:::

::: tip
Example:

const body = new Body("Hello world.");

const options: SetBodyOptions = {updateContentLength: true;};

request.setBody(body, options);
:::

## RequestSpec

The `RequestSpec` class interface defines the structure and methods for a request that has **not yet been sent** (_as opposed to the **saved** request used by `export declare type Request`_). This object class represents the HTTP request and provides methods for accessing and manipulating the data within it.

```
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
```

::: info
The `constructor` creates an instance of the class. The `url` parameter can be of type `string`.
:::

::: tip TIPS

- The default HTTP Method utilized is GET.
- You can include the schema, host and port to the URL - allowing you to easily pre-populate some of the properties.
- Once initialized, the `host` component is extracted from the URL and used internally within the RequestSpec class. To explicitly change the host, see the `setHost(host: string): void;` method below.
:::

#### `getHost(): string;`

- This method will return the `host` of the request in type `string`.

#### `setHost(host: string): void;`

- This method explicitly sets the host of the request in the case you want to change it. The `host` parameter value is the domain name in type `string`. The return type is `void` as no value is returned.

::: tip
Example:

const request = new RequestSpec(`"https://example.com"`);

request.setHost("caido.io"):
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

const headers = request.getHeaders();

sdk.console.log(headers);

_Returns:_

{

  "Content-Type": ["application/json"],

  "Authorization": ["Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],

  ...

}
:::

#### `getHeader(name: string): Array<string> | undefined;`

- This method will return the value of a specified `header` in the request. The `name` parameter value is the header name in type `string`. The returned `value` is type `Array<string>` since the header can contain multiple values OR is of type `undefined` when there is an absence of a value (_the specified header isn't present in the request_).

::: info
The definition syntax is as follows: `method`(`parameter`: `type`): `return type` OR `return type`;
:::

::: tip
Example:

const header = request.getHeader("Content-Type");

sdk.console.log(header);

_Returns:_

["application/json"]
:::

#### `setHeader(name: string, value: string): void;`

- This method sets an HTTP header. The `name` parameter value is the header name in type `string`. The `value` parameter takes the header value in type `string`. The return type is `void` as no value is returned.

#### `removeHeader(name: string): void;`

- This method removes a HTTP header. The `name` parameter value is the header name in type `string`. The return type is `void` as no value is returned.

#### `getBody(): Body | undefined;`

- This method will return the request `body` as a [Body instance](#body) OR `undefined` if no body exists.

#### `setBody(body: Body | Bytes, options?: SetBodyOptions): void;`

- This method sets the body of the request. The `body` parameter can be a variable that stores a [Body instance](#body) OR its value can be of type `string/Array<number>/Uint8Array`. The `?` in `options?` signifies that the parameter is optional. `options` is of type [SetBodyOptions](#setbodyoptions).

::: tip
Example:

const body = new Body("Hello world.");

const options: SetBodyOptions = {updateContentLength: true;};

request.setBody(body, options);
:::

#### `setRaw(raw: Bytes): RequestSpecRaw;`

- This method sets the raw bytes of the request. The `raw` parameter can be a variable that stores a `Bytes` object of type `string/Array<number>/Uint8Array`.  The return type is a `RequestSpecRaw` object which represents the raw request.

::: tip TIPS
This method is useful when you have a pre-existing byte representation of an HTTP request and want to set it directly without individually setting properties such as the HTTP Method, headers, the body, etc.

Example:

const rawBytes = [`RAW BYTE ARRAY OF REQUEST INSERTED HERE`];

const request = new RequestSpec(`"https://example.com"`);

const rawRequest = request.setRaw(rawBytes);
:::

## RequestSpecRaw

The `RequestSpecRaw` class interface defines the structure and methods for a request that has **been set using the `setRaw()` method of the [RequestSpec](#requestspec) class**. This object class represents the raw HTTP request and provides methods for accessing and manipulating the raw bytes within it.

```
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

::: details typing.d.ts

```
/**
 * Console interface for logging.
 *
 * Currently logs are only available in the backend logs.
 * See https://docs.caido.io/report_bug.html#1-backend-logs
 */
export declare type Console = {
  debug(message: any): void;
  log(message: any): void;
  warn(message: any): void;
  error(message: any): void;
};

/**
 * The body of a Request or Response.
 *
 * Calling `to<FORMAT>` will try to convert the body to the desired format.
 */
export declare class Body {
  constructor(data: string | Array<number> | Uint8Array);
  /**
   * Parse the body as a string.
   *
   * Unprintable characters will be replaced with `�`.
   */
  toText(): string;
  /**
   * Try to parse the body as JSON.
   *
   * @throws {SyntaxError} If the body is not valid JSON.
   */
  toJson(): any;
  /**
   * Get the raw body as an array of bytes.
   */
  toRaw(): Uint8Array;
}

/**
 * A saved immutable Request.
 *
 * To modify, use `toSpec` to get a `RequestSpec` object.
 */
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

type SetBodyOptions = {
  /**
   * Should update the Content-Type header.
   *
   * @default true
   */
  updateContentLength: boolean;
};

/**
 * A mutable Request not yet sent.
 */
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
}

/**
 * A mutable raw Request not yet sent.
 */
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
}

/**
 * An immutable saved Response.
 */
export declare type Response = {
  getId(): ID;
  getCode(): number;
  getHeaders(): Record<string, Array<string>>;
  getHeader(name: string): Array<string> | undefined;
  getBody(): Body | undefined;
};

/**
 * An immutable saved Request and Response pair.
 */
export declare type RequestResponse = {
  request: Request;
  response: Response;
};

/**
 * The SDK for the Requests service.
 */
export declare type RequestsSDK = {
  /**
   * Sends a request.
   *
   * This respects the upstream proxy settings.
   *
   * @throws {Error} If the request cannot be sent.
   *
   * @example
   * const spec = new RequestSpec("https://example.com");
   * sdk.requests.send(request)
   *   .then((res) => {
   *     console.log(res.request.getId());
   *     console.log(res.response.getCode());
   *   })
   *   .catch((err) => {
   *     console.error(err);
   *   });
   */
  send(request: RequestSpec | RequestSpecRaw): Promise<RequestResponse>;

  /**
   * Checks if a request is in scope.
   *
   * @example
   * if (sdk.requests.inScope(request)) {
   *  console.log("In scope");
   * }
   */
  inScope(request: Request | RequestSpec): boolean;
};

/**
 * A saved immutable Finding.
 *
 * To modify, use `toSpec` to get a `FindingSpec` object.
 */
export declare type Finding = {
  getId(): ID;
  getTitle(): string;
  getDescription(): string | undefined;
  getReporter(): string;
};

/**
 * A mutable Finding not yet created.
 */
export declare type FindingSpec = {
  title: string;
  description?: string | undefined;
  reporter: string;
  request: Request;
};

/**
 * The SDK for the Findings service.
 */
export declare type FindingsSDK = {
  /**
   * Creates a new Finding.
   *
   * @throws {Error} If the request cannot be saved.
   *
   * @example
   * sdk.findings.create({
   *   title: "Title",
   *   description: "Description",
   *   reporter: "Reporter",
   *   request,
   * });
   */
  create(spec: FindingSpec): Promise<Finding>;
};

export declare type HttpInput = {
  request: Request | undefined;
  response: Response | undefined;
};
/**
 * @deprecated Use HttpInput instead.
 */
export declare type PassiveInput = HttpInput;
export declare type BytesInput = Array<number>;
/**
 * @deprecated Use BytesInput instead.
 */
export declare type ConvertInput = BytesInput;

export declare type ID = string;
export declare type Data = Bytes;
export declare type Decision = boolean;
export declare type Bytes = string | Array<number> | Uint8Array;
export declare type MaybePromise<T> = T | Promise<T>;

/**
 * The SDK object available to all scripts.
 */
export declare type SDK = {
  /**
   * The console.
   *
   * This is currently the same as the global `console`.
   */
  console: Console;
  /**
   * The SDK for the Findings service.
   */
  findings: FindingsSDK;
  /**
   * The SDK for the Requests services
   */
  requests: RequestsSDK;
  /**
   * Converts bytes to a string.
   *
   * Unprintable characters will be replaced with `�`.
   */
  asString(array: Bytes): string;
};
```

:::
