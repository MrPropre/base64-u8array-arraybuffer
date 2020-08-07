const runningOnBrowser = typeof window !== 'undefined'

const base64urlToBase64 = base64UrlString => {
  // Replace non-url compatible chars with base64 standard chars
  const base64 = base64UrlString
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  // Pad out with standard base64 required padding characters if missing
  const missingPadding = '='.repeat((4 - base64.length % 4) % 4)

  return base64 + missingPadding
}

const base64Decode = data => {
  if (runningOnBrowser) {
    return atob(data)
  }
  // atob polyfill for Node
  return Buffer.from(data, 'base64').toString('binary')
}

const base64ToUint8Array = base64String => {
  // base64 sanitizing
  const base64 = base64urlToBase64(base64String)

  // base64 decoding
  const rawData = base64Decode(base64)

  // Converting raw data to Uint8Array
  return Uint8Array.from(rawData, char => char.charCodeAt(0))
}

const typedArrayToBase64 = typedArray => {
  if (runningOnBrowser) {
    return btoa(String.fromCharCode(...typedArray))
  }
  return Buffer.from(typedArray).toString('base64')
}

const uint8ArrayToBase64 = typedArrayToBase64

const typedArrayToArrayBuffer = typedArray => {
  return typedArray.buffer
}

const uint8ArrayToArrayBuffer = typedArrayToArrayBuffer

const arrayBufferToUint8Array = arrayBuffer => {
  return new Uint8Array(arrayBuffer)
}

const base64ToArrayBuffer = base64String => {
  const uint8Array = base64ToUint8Array(base64String)
  return uint8ArrayToArrayBuffer(uint8Array)
}

const arrayBufferToBase64 = arrayBuffer => {
  const uint8Array = arrayBufferToUint8Array(arrayBuffer)
  return uint8ArrayToBase64(uint8Array)
}

export { base64ToUint8Array, uint8ArrayToBase64, uint8ArrayToArrayBuffer, arrayBufferToUint8Array, base64ToArrayBuffer, arrayBufferToBase64, typedArrayToArrayBuffer, typedArrayToBase64 }
