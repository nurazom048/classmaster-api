declare module "node-appwrite/file" {
    export class InputFile {
        static fromPath(path: string, filename: string): any;
        static fromBuffer(buffer: Buffer, filename: string): any;
        static fromPlainText(content: string, filename: string): any;
    }
}
