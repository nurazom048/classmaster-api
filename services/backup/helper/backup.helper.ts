/**
 * readable timestamp provide kore
 * Format: 25_march_26_15-18
 */
export const getReadableTimestamp = (): string => {
    const now = new Date();
    
    // Get components in Asia/Dhaka time zone
    const day = now.toLocaleString('en-US', { timeZone: 'Asia/Dhaka', day: 'numeric' });
    const month = now.toLocaleString('en-US', { timeZone: 'Asia/Dhaka', month: 'long' }).toLowerCase();
    const year = now.toLocaleString('en-US', { timeZone: 'Asia/Dhaka', year: '2-digit' });

    // Get time in 12-hour format with am/pm
    const timeStr = now.toLocaleString('en-US', { 
        timeZone: 'Asia/Dhaka', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    }).toLowerCase(); // e.g. "8:30 am" or "11:56 pm"

    // Replace space with underscore so that the filename is safe (e.g. "8:30_am")
    const formattedTime = timeStr.replace(/\s+/g, '_');
    
    return `${day}_${month}_${year}_${formattedTime}`;
};

/**
 * full backup file name-provider
 */
export const generateBackupFileName = (): string => {
    const timestamp = getReadableTimestamp();
    return `pg_dup_${timestamp}.dump`;
};