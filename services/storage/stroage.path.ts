export const summaryFilePath = (routineID: string, userID: string, fileName: string): string => {
    const monthName = new Date().toLocaleString('en-US', { month: 'long' });
    const cleanFileName = fileName.replace(/\s+/g, '-');
    return `summary/${monthName}/${routineID}-${userID}/${Date.now()}-${cleanFileName}`;
};
