import { generateIV } from './generateIV'
import { CryptoError } from '../errors'
import { handleError } from './handleError';
import { encode } from './encode';

/**
 * Encrypts data using the AES-GCM encryption algorithm.
 *
 * @param {string} data - The data to be encrypted.
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
  return handleError<
    Promise<{ cipher: Uint8Array; iv: Uint8Array }>,
    CryptoError
  >(
    async () => {
      // Encode the data to be encrypted.
      const encoded = encode(data)

      // Generate a cryptographically secure Initialization Vector (IV).
      const iv = generateIV()

      // Encrypt the data using AES-GCM.
      const cipher = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        encoded
      )

      return {
        cipher: new Uint8Array(cipher),
        iv,
      }
    },
    (error: any) => `Encryption failed: ${error.message}`
  )
}
