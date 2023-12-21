/**
 * Represents an error that occurs during data conversion operations.
 *
 * This error class extends the built-in Error class to provide a specialized error type
 * for handling errors related to data conversion.
 *
 * @class
 * @extends Error
 */
export class DataConversionError extends Error {
  /**
   * Creates a new DataConversionError instance with the specified error message.
   *
   * @constructor
   * @param {string} message - The error message describing the data conversion error.
   */
  constructor(message: string) {
    super(message);
    this.name = 'DataConversionError';
  }
}
