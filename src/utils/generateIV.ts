import { CryptoError } from '../errors'
import { handleError } from './handleError';

/**
 * Generates a cryptographically secure Initialization Vector (IV) for use in AES-GCM encryption.
 *
 * @param {number} [ivLength=12] - The length of the generated IV in bytes. Default is 12 bytes.
 * @returns {Uint8Array} The generated cryptographically secure IV as a Uint8Array.
 *
 * @throws {CryptoError} If the IV generation fails due to an insufficient entropy source.
 *
 * @example
 * const iv = generateIV(); // Generates a cryptographically secure random 12-byte IV
 * const customIv = generateIV(16); // Generates a cryptographically secure random 16-byte IV
 */
export const generateIV = (ivLength: number = 12): Uint8Array => {
  return handleError<Uint8Array, CryptoError>(
    () => {
      // Use a cryptographically secure random number generator to generate random IV bytes.
      const ivBytes = new Uint8Array(ivLength)
      window.crypto.getRandomValues(ivBytes)

      return ivBytes
    },
    (error: any) => `Failed to generate IV: ${error.message}`
  )
}
