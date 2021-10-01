# Hazel Configuration Issue
This is a companion to issue [vercel/hazel#132](https://github.com/vercel/hazel/issues/132).

## Setup
You will need the [Vercel CLI](https://vercel.com/cli) installed to run this example.

## Current Behavior
```sh
vercel dev
```
__Example:__ [`api/index.ts`](https://github.com/lukeshumard/hazel-example/blob/main/api/index.ts).

This is the default behavior of the [`hazel`](https://github.com/vercel/hazel) module's programmatic usage with its current documentation. Opening a browser to the URL the local server will not result in a response.

__Usage__
```js
// No HTTP Response sent ❌
import hazel from 'hazel-server'
export default (req, res) => hazel({ account: 'vercel' })(req, res)
```

## With Config
```sh
vercel dev -A vercel-with-config.json
```
__Example:__ [`api/withConfig.ts`](https://github.com/lukeshumard/hazel-example/blob/main/api/withConfig.ts).

This approach requires loading the developer specifying the configuration manually or by replicating [`lib/server.js`](https://github.com/vercel/hazel/blob/a073ccd35725ef381383757aab31ae8933bd531c/lib/server.js).

__Usage__
```js
// Works ✅
import hazel from 'hazel-server'
export default (req, res) =>
  hazel({ account: 'vercel', repository: 'hazel' })(req, res)
```

## With Server
```sh
vercel dev -A vercel-with-server.json
```
__Example:__ [`api/withServer.ts`](https://github.com/lukeshumard/hazel-example/blob/main/api/withServer.ts).

By using `hazel-server/lib/server` instead of the default module, the documentation in the [README](https://github.com/vercel/hazel/blob/a073ccd35725ef381383757aab31ae8933bd531c/README.md#programmatic-usage) works as expected.

__Usage__
```js
// Works ✅
import hazel from 'hazel-server/lib/server'
export default (req, res) => hazel(req, res)
```
