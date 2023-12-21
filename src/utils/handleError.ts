/**
 * A generic error handler that wraps the provided callback function.
 *
 * @param {() => T} callback - The callback function containing the main logic.
 * @param {(error: any) => string} errorMessageCallback - A callback function that generates a custom error message based on the caught error.
 * @returns {T} The result of the callback function.
 * @throws {E} The specific error type as defined by the generic type parameter.
 */
export const handleError = <T, E extends Error>(
  callback: () => T,
  errorMessageCallback: (error: any) => string
): T => {
  try {
    return callback();
  } catch (error) {
    const customErrorMessage = errorMessageCallback(error);
    throw new Error(customErrorMessage) as E;
  }
};