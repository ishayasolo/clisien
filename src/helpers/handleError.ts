import { CryptoError } from "../cryptoError";

/**
 * A generic error handler that wraps the provided callback function.
 *
 * @param {() => T} callback - The callback function containing the main logic.
 * @returns {T} The result of the callback function.
 * @throws {CryptoError} If an error occurs during the execution of the callback.
 */
export const handleError = <T>(callback: () => T): T => {
  try {
    return callback();
  } catch (error: any) {
    throw new CryptoError(error.message);
  }
};
