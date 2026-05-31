/**
 * Formats a string by trimming whitespace, replacing internal spaces with hyphens, 
 * and converting it to lowercase. Returns 'user' if the string is empty or invalid.
 */
export const removeNameSpace = (str: string | null | undefined): string => {
    if (!str || !str.trim()) {
        return 'user';
    }
    return str.trim().replace(/\s+/g, '-').toLowerCase();
};