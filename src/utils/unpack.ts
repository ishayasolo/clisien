/**
 * Converts a base64-encoded string to an ArrayBuffer.
 *
 * @param {string} packed - The base64-encoded string to be converted.
 * @returns {ArrayBuffer} The ArrayBuffer representation of the base64-encoded string.
 */
export const unpack = (packed: string): ArrayBuffer => {
  const string = window.atob(packed);
  const buffer = new ArrayBuffer(string.length);
  const bufferView = new Uint8Array(buffer);

  for (let i = 0; i < string.length; i++) {
    bufferView[i] = string.charCodeAt(i);
  }

  return buffer;
};
