import { DEFAULT_ITERATIONS, DEFAULT_KEY_LENGTH } from '../constants'
import { CryptoError } from '../errors'
import { encode } from './encode';
import { handleError } from './handleError';

/**
 * Derives an encryption key from a passphrase and a salt using the PBKDF2 algorithm.
 *
 * @param {Object} params - Parameters for key derivation.
 * @param {string} params.passphrase - The passphrase to derive the encryption key from.
 * @param {Uint8Array} params.salt - The salt used in the key derivation process.
 * @param {number} params.iterations - The number of iterations to perform during key derivation.
 * @param {number} params.keyLength - The length of the derived encryption key in bits (e.g., 256).
 * @returns {Promise<CryptoKey>} A promise that resolves to the derived encryption key as a CryptoKey object.
 *
 * @throws {CryptoError} Throws an error if key derivation fails.
 */
export const deriveEncryptionKey = async ({
  passphrase,
  salt,
  iterations = DEFAULT_ITERATIONS, // Default to 10,000 iterations.
  keyLength = DEFAULT_KEY_LENGTH, // Default to 256 bits.
}: {
  passphrase: string
  salt: Uint8Array
  iterations?: number
  keyLength?: number
}): Promise<CryptoKey> => {
  return handleError<Promise<CryptoKey>, CryptoError>(
    async () => {
      // Convert the passphrase to a Uint8Array.
      const passphraseBuffer = encode(passphrase)

      // Derive the encryption key using PBKDF2.
      const importedKey = await crypto.subtle.importKey(
        'raw',
        passphraseBuffer,
        { name: 'PBKDF2' },
        false,
        ['deriveBits']
      )

      const derivedBits = await crypto.subtle.deriveBits(
        {
          name: 'PBKDF2',
          salt: salt,
          iterations: iterations,
          hash: 'SHA-256',
        },
        importedKey,
        keyLength
      )

      // Create a CryptoKey from the derived key bits.
      const key = await crypto.subtle.importKey(
        'raw',
        derivedBits,
        { name: 'AES-GCM' },
        false,
        ['encrypt', 'decrypt']
      )

      return key
    },
    (error: any) => `Failed to derive encryption key: ${error.message}`
  )
}
