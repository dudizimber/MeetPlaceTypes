import { User } from '../interfaces/user';
import { DocumentSnapshot } from '@google-cloud/firestore';
export declare class Host implements User {
    hostId: string;
    roomCount: number;
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
    documentId: string;
    fullName: string;
    constructor($firstName: string, $lastName: string, $email: string, $hostId: string, $roomCount: number, $avatar: string, $documentId: string);
    static fromFirestore(snap: DocumentSnapshot): Host | null;
    static fromMap(data: any): Host;
    toMap(): {
        firstName: string;
        lastName: string;
        email: string;
        hostId: string;
        roomCount: number;
        avatar: string;
        documentId: string;
    };
}
