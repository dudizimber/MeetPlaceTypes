import { User } from '../interfaces/user';
import { FileOptions } from './fileOptions';
import { FileType } from '../enums/file-type';
export class File {
  fileId: string;
  name: string;
  fileType: FileType;
  fileUrl: string;
  fileOptions: FileOptions;
  creator: User;
  createdDate: Date;
  body: string;

  constructor(
    $fileId: string,
    $name: string,
    $fileType: FileType,
    $fileUrl: string,
    $fileOptions: FileOptions,
    $creator: User,
    $createdDate: Date,
    $body: string,
  ) {
    this.fileId = $fileId;
    this.name = $name;
    this.fileType = $fileType;
    this.fileUrl = $fileUrl;
    this.fileOptions = $fileOptions;
    this.creator = $creator;
    this.createdDate = $createdDate;
    this.body = $body;
  }
}
