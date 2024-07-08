# Frontend Plugin SDK

## UI

```ts
export type UI = {
    button: (options?: ButtonOptions) => HTMLElement;
    card: (options?: CardOptions) => HTMLElement;
    well: (options?: WellOptions) => HTMLElement;
};
type ButtonOptions = {
    variant?: "primary" | "secondary" | "tertiary";
    label?: string;
    leadingIcon?: string;
    trailingIcon?: string;
    size?: "small" | "medium" | "large";
};
type CardOptions = {
    header?: HTMLElement;
    body?: HTMLElement;
    footer?: HTMLElement;
};
type WellOptions = {
    header?: HTMLElement;
    body?: HTMLElement;
    footer?: HTMLElement;
};
export {};
```

## Scopes

```ts
export type Scopes = {
    getScopes: () => Scope[];
    createScope: (options: CreateScopeOptions) => Promise<Scope | undefined>;
    updateScope: (id: string, options: UpdateScopeOptions) => Promise<Scope | undefined>;
    deleteScope: (id: string) => Promise<boolean>;
};
type Scope = {
    id: string;
    name: string;
    allowlist: string[];
    denylist: string[];
};
type CreateScopeOptions = {
    name: string;
    allowlist: string[];
    denylist: string[];
};
type UpdateScopeOptions = {
    name?: string;
    allowlist?: string[];
    denylist?: string[];
};
export {};
```

## Commands

```ts
export type Commands = {
    register: (id: string, options: CommandOptions) => void;
};
type CommandOptions = {
    name: string;
    run: (context: CommandContext) => void;
    group?: string;
    when?: (context: CommandContext) => boolean;
};
type CommandContextBase = {
    type: "BaseContext";
};
type CommandContextRequestRow = {
    type: "RequestRowContext";
    requests: {
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        isTls: boolean;
    }[];
};
type CommandContextRequest = {
    type: "RequestContext";
    request: {
        host: string;
        port: number;
        path: string;
        query: string;
        isTls: boolean;
        raw: string;
    };
    selection: string;
};
type CommandContextResponse = {
    type: "ResponseContext";
    request: {
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        isTls: boolean;
    };
    response: {
        id: string;
        raw: string;
        statusCode: number;
        roundtripTime: number;
    };
    selection: string;
};
export type CommandContext = CommandContextBase | CommandContextRequestRow | CommandContextRequest | CommandContextResponse;
export {};
```

## Menu

```ts
export type Menu = {
    registerItem: (item: MenuItem) => void;
};
type MenuItem = RequestRowMenuItem | SettingsMenuItem | RequestMenuItem | ResponseMenuItem;
type RequestRowMenuItem = {
    type: "RequestRow";
    commandId: string;
    leadingIcon?: string;
};
type RequestMenuItem = {
    type: "Request";
    commandId: string;
    leadingIcon?: string;
};
type ResponseMenuItem = {
    type: "Response";
    commandId: string;
    leadingIcon?: string;
};
type SettingsMenuItem = {
    type: "Settings";
    label: string;
    path: string;
    leadingIcon?: string;
};
export {};
```

## Navigation

```ts
export type { CommandContext } from "./commands";
export type Navigation = {
    goTo: (path: string) => void;
    addPage: (path: string, options: PageOptions) => void;
};
type PageOptions = {
    body: HTMLElement;
    topbar?: HTMLElement;
};
```

## Window

```ts
export type Window = {
    getActiveEditor: () => Editor | undefined;
    showToast: (message: string, options?: ToastOptions) => void;
};
type ToastOptions = {
    variant?: "success" | "error" | "warning" | "info";
    duration?: number;
};
type Editor = {
    getSelectedText: () => string;
    replaceSelectedText: (text: string) => void;
    isReadOnly: () => boolean;
    focus: () => void;
};
export {};
```

## Storage

```ts
type JSONPrimitive = string | number | boolean | null | undefined;
type JSONValue = JSONPrimitive | JSONValue[] | {
    [key: string]: JSONValue;
};
type NotAssignableToJson = bigint | symbol | Function;
type JSONCompatible<T> = unknown extends T ? never : {
    [P in keyof T]: T[P] extends JSONValue ? T[P] : T[P] extends NotAssignableToJson ? never : JSONCompatible<T[P]>;
};
export type Storage = {
    get: () => JSONValue;
    set: <T>(value: JSONCompatible<T>) => Promise<void>;
    onChange: (callback: (value: JSONValue) => void) => void;
};
export {};
```
