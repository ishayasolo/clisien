/**
 * Represents an error that occurs during cryptographic operations.
 *
 * This error class extends the built-in Error class to provide a specialized error type
 * for handling cryptographic errors.
 *
 * @class
 * @extends Error
 */
export class CryptoError extends Error {
  /**
   * Creates a new CryptoError instance with the specified error message.
   *
   * @constructor
   * @param {string} message - The error message describing the cryptographic error.
   */
  constructor(message: string) {
    super(message);
    this.name = 'CryptoError';
  }
}
