import { User } from '../interfaces/user';
import { FileOptions } from './fileOptions';
import { FileType } from '../enums/file-type';
export declare class File {
  fileId: string;
  name: string;
  fileType: FileType;
  fileUrl: string;
  fileOptions: FileOptions;
  creator: User;
  createdDate: Date;
  body: string;
  constructor(
    fileId: string,
    name: string,
    fileType: FileType,
    fileUrl: string,
    fileOptions: FileOptions,
    creator: User,
    createdDate: Date,
    body: string,
  );
}
