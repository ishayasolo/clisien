/**
 * Converts an ArrayBuffer to a base64-encoded string.
 *
 * @param {ArrayBuffer} buffer - The ArrayBuffer to be converted.
 * @returns {string} The base64-encoded string representation of the ArrayBuffer.
 */
export const pack = (buffer: ArrayBuffer): string => {
  const uint8Array = new Uint8Array(buffer);
  const array = Array.from(uint8Array);
  return window.btoa(String.fromCharCode.apply(null, array));
};
