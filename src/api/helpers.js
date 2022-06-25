/**
 * Request function
 * @param {string} apiUrl 
 * @returns {Promise<Object>}
 */
export async function request(apiUrl) {
    const result = await fetch(apiUrl)
    return result.json()
}