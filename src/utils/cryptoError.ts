/**
 * Represents an error that occurs during cryptographic operations.
 */
export class CryptoError extends Error {
  /**
   * Creates a new CryptoKeyError instance.
   *
   * @param message - The error message.
   */
  constructor(message: string) {
    super(message)
    this.name = 'CryptoError'
  }
}
