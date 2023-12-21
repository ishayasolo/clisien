import { CryptoError } from '../errors'
import { decode } from './decode';
import { handleError } from './handleError';

/**
 * Decrypts a ciphertext using the AES-GCM decryption algorithm.
 *
 * @param {Uint8Array} cipher - The ciphertext to be decrypted.
 * @param {CryptoKey} key - The cryptographic key used for decryption.
 * @param {Uint8Array} iv - The initialization vector (IV) used for decryption.
 * @returns {Promise<string>} A Promise that resolves to the decrypted plaintext as a string.
 * @throws {CryptoError} If an error occurs during decryption.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt
 */
export const decrypt = async (
  cipher: Uint8Array,
  key: CryptoKey,
  iv: Uint8Array
): Promise<string> => {
  return handleError<Promise<string>, CryptoError>(
    async () => {
      // Decrypt the ciphertext using AES-GCM.
      const encoded = await window.crypto.subtle.decrypt(
        {
          name: 'AES-GCM',
          iv: iv,
        },
        key,
        cipher
      )

      // Decode the decrypted plaintext.
      return decode(encoded)
    },
    (error: any) => `Decryption failed: ${error.message}`
  )
}
