/**
 * Generates a random salt for the user.
 *
 * A salt is a random value used in cryptography to enhance the security of password storage
 * by making each user's password hash unique, even if two users have the same password.
 *
 * @param {number} [saltLength=32] - The length of the generated salt. Default is 32 characters.
 * @returns {string} The generated random salt.
 *
 * @example
 * const userSalt = generateSalt(); // Generates a random 32-character salt
 * const customSalt = generateSalt(64); // Generates a random 64-character salt
 */
const generateSalt = (saltLength: number = 32): Uint8Array => {
	const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let salt = "";

	for (let i = 0; i < saltLength; i++) {
		const randomIndex = Math.floor(Math.random() * charset.length);
		salt += charset[randomIndex];
	}

	const encoder = new TextEncoder();
  return encoder.encode(salt);
}

export { generateSalt };