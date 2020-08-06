# base64 <-> Uint8Array <-> ArrayBuffer
[![Build Status](https://travis-ci.org/PropreCity/base64-u8array-arraybuffer.svg)](https://travis-ci.org/PropreCity/base64-u8array-arraybuffer)
[![npm version](https://badge.fury.io/js/base64-u8array-arraybuffer.svg)](https://www.npmjs.com/package/base64-u8array-arraybuffer)

📦 A simple, lightweight, and efficient JavaScript library to manage encoding and decoding between base64 data, Uint8Arrays, and ArrayBuffers. This library perfectly works with Node.js and the browser.

- **< 900 bytes** gzipped!
- No dependency
- Accepts base64url and replace non-url compatible chars with base64 standard chars
- Add missing padding to base64 string
- Uses modern functions and shorter solutions
- Supports ES modules, AMD, CommonJS and IIFE

## Installation

### CDN

The easiest way to use base64-u8array-arraybuffer is to include the library from a CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/base64-u8array-arraybuffer@1.0.0/dist/base64-u8array-arraybuffer.min.js"></script>
```

Then, in your JavaScript code:
```js
// Unpacking needed functions from the global object
const { base64ToArrayBuffer } = base64u8ArrayBuffer

const buffer = base64ToArrayBuffer('base64 string here')
```

### Local

You can also install base64-u8array-arraybuffer in your project.

```bash
npm i base64-u8array-arraybuffer
```

And then, you can import the library as ES Module:
```js
import { base64ToArrayBuffer } from 'base64-u8array-arraybuffer'

const buffer = base64ToArrayBuffer('base64 string here')
```
You can also use commonJS syntax with `require()`

Note ES Module syntax also works in modern browsers, you just need to add `type="module"` to your `<script>` tag.
```html
<script type="module" src="..."></script>
```

## Available functions

| Function name | Description |
| --- | --- |
| `base64ToUint8Array(base64String)` | base64 to Uint8Array |
| `uint8ArrayToBase64(uint8Array)` | Uint8Array to Base64 (works with any TypedArray, you can use `typedArrayToBase64()` alias) |
| `uint8ArrayToArrayBuffer(uint8Array)` | Uint8Array to ArrayBuffer (works with any TypedArray, you can use `typedArrayToArrayBuffer()` alias) |
| `arrayBufferToUint8Array(arrayBuffer)` | ArrayBuffer to Uint8Array |
| `base64ToArrayBuffer(base64String)` | base64 to ArrayBuffer |
| `arrayBufferToBase64(arrayBuffer)` | ArrayBuffer to base64 |

## Useful case

An example for this library would be to convert a base64url VAPID application server key into an Uint8Array to suscribe to Web Push Notifications. You can achieve this by using `base64ToUint8Array(base64String)` function.

```js
const { base64ToUint8Array } = base64u8ArrayBuffer

const applicationServerPublicKey = 'base64url public key'

async function subscribeUserToPush(registration) {
  // ...
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: base64ToUint8Array(applicationServerPublicKey)
  })
  // ...
}
```

## Known issues

```txt
RangeError: Maximum call stack size exceeded
```
This error occurs when using too large data (more than 30kb) to encode a base64 string (e.g, `uint8ArrayToBase64()` and `arrayBufferToBase64()`).

## Tests

There is no tests for the moment.
