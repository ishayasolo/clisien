/**
 * Encodes a string into a Uint8Array using the TextEncoder API.
 *
 * @param {string} data - The string to encode.
 * @returns {Uint8Array} A Uint8Array containing the encoded data.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 */
export const encode = (data: string): Uint8Array => {
  const encoder = new TextEncoder()

  return encoder.encode(data)
}
