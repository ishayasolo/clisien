/**
 * Decodes a bytestream (Uint8Array or ArrayBuffer) into a string using the TextDecoder API.
 *
 * @param {Uint8Array | ArrayBuffer} bytestream - The bytestream to be decoded into a string.
 * @returns {string} The decoded string.
 * @throws {Error} If decoding the bytestream into a string fails.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder
 */
export const decode = (bytestream: Uint8Array | ArrayBuffer): string => {
  const uint8Array = bytestream instanceof Uint8Array ? bytestream : new Uint8Array(bytestream);
  const decoder = new TextDecoder();
  return decoder.decode(uint8Array);
};
