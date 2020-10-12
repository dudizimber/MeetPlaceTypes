import { User } from '../interfaces/user';
import { FileOptions } from './fileOptions';
import { FileType } from '../enums/file-type';
export class File {
  constructor(
    public fileId: string,
    public name: string,
    public fileType: FileType,
    public fileUrl: string,
    public fileOptions: FileOptions,
    public creator: User,
    public createdDate: Date,
    public body: string,
  ) {}
}
