import { generateIv } from './generators/generateIv'
import { encode } from './helpers/encode'
import { handleError } from './helpers/handleError'

/**
 * Encrypts data using the AES-GCM encryption algorithm.
 *
 * @param {Uint8Array} data - The data to be encrypted.
 * @param {CryptoKey} key - The cryptographic key used for encryption.
 * @returns {Promise<{ cipher: Uint8Array, iv: Uint8Array }>} A Promise that resolves to an object containing the ciphertext and the initialization vector (IV).
 *
 * @throws {CryptoError} If an error occurs during encryption.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
 */
export const encrypt = async (
  data: string,
  key: CryptoKey
): Promise<{ cipher: Uint8Array; iv: Uint8Array }> => {
  return handleError(() => {
    // Encode the data to be encrypted.
    const encoded = encode(data)

    // Generate a cryptographically secure Initialization Vector (IV).
    const iv = generateIv()

    // Encrypt the data using AES-GCM.
    const cipher = window.crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv,
      },
      key,
      encoded
    )

    return Promise.all([cipher, iv])
  }).then(([cipher, iv]) => ({
    cipher: new Uint8Array(cipher),
    iv,
  }))
}
