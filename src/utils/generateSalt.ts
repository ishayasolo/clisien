import { CryptoError } from '../errors'
import { handleError } from './handleError';

/**
 * Generates a cryptographically secure random salt for enhancing password security.
 *
 * A salt is a random value used in cryptography to make each user's password hash unique,
 * even if two users have the same password. This function uses a cryptographically secure
 * random number generator for better security.
 *
 * @param {number} [saltLength=32] - The length of the generated salt in bytes. Default is 32 bytes.
 * @returns {Uint8Array} The generated cryptographically secure random salt as a Uint8Array.
 *
 * @throws {CryptoError} If the salt generation fails due to an insufficient entropy source.
 *
 * @example
 * const userSalt = generateSalt(); // Generates a cryptographically secure random 32-byte salt
 * const customSalt = generateSalt(64); // Generates a cryptographically secure random 64-byte salt
 */
export const generateSalt = (saltLength: number = 32): Uint8Array => {
  return handleError<Uint8Array, CryptoError>(
    () => {
      // Create a Uint8Array to store the random salt.
      const randomValues = new Uint8Array(saltLength)

      // Use a cryptographically secure random number generator.
      window.crypto.getRandomValues(randomValues)

      return randomValues
    },
    (error: any) => `Failed to generate salt: ${error.message}`
  )
}
