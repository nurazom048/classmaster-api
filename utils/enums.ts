// enums.ts
export enum ActiveStatus {
    NOT_JOINED = "not_joined",
    JOINED = "joined",
    PENDING = "pending",
}
export enum StorageProvider {
    MINIO = "minio",
    R2 = "r2",
    APPWRITE = "appwrite",
    OTHERS = "others",
}