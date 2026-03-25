/**
 * readable timestamp provide kore
 * Format: 25_march_26_15-18
 */
export const getReadableTimestamp = (): string => {
    const now = new Date();
    const day = now.getDate();
    const months = [
        "march", "april", "may", "june", "july", "august",
        "september", "october", "november", "december", "january", "february"
    ];

    const month = months[now.getMonth()];
    const year = now.getFullYear().toString().slice(-2);
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${day}_${month}_${year}_${hours}-${minutes}`;
};

/**
 * full backup file name-provider
 */
export const generateBackupFileName = (): string => {
    const timestamp = getReadableTimestamp();
    return `pg_dup_${timestamp}.dump`;
};