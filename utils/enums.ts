// enums.ts
export enum ActiveStatus {
    NOT_JOINED = "not_joined",
    JOINED = "joined",
    PENDING = "pending",
}
export enum StorageProvider {
    S3 = "s3",
    MINIO = "minio",
    R2 = "r2",
    APPWRITE = "appwrite",
    OTHERS = "others",
}