export const summaryFilePath = (routineID: string, userID: string, fileName: string): string => {
    const monthName = new Date().toLocaleString('en-US', { month: 'long' });
    const cleanFileName = fileName.replace(/\s+/g, '-');
    return `summary/${monthName}/${routineID}-${userID}/${Date.now()}-${cleanFileName}`;
};
/**
 * Generates a clean relative path (key) to store in the database.
 * No base URL or bucket name is appended, keeping database entries pure.
 */
export const getAccountImagePath = (
    accountId: string,
    type: 'coverImage' | 'image',
    originalName: string
): string => {
    const timestamp = Date.now();
    // Replacing spaces and special characters to ensure clean paths on MinIO
    const cleanFileName = originalName.replace(/\s+/g, '-');
    return `Account-id-${accountId}/images/${type}/-${timestamp}-${cleanFileName}`;
};

export const getNoticeFilePath = (
    accountId: string,
    uuid: string,
    originalName: string
): string => {
    const monthName = new Date().toLocaleString('en-US', { month: 'long' });
    const cleanFileName = originalName.replace(/\s+/g, '-');
    return `notice/${monthName}/academyId-${accountId}/uid-${uuid}-${cleanFileName}`;
};
