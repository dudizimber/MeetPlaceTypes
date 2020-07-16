import { User } from '../interfaces/user';


export class Participant implements User {
    participantId: string;
    roomCount: number;
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
    documentId: string;

    constructor($firstName: string, $lastName: string, $email: string, $participantId: string, $roomCount: number, $avatar: string, $documentId: string) {
        this.participantId = $participantId;
        this.roomCount = $roomCount;
        this.avatar = $avatar;
        this.firstName = $firstName;
        this.lastName = $lastName;
        this.email = $email;
        this.documentId = $documentId;
    }

    static fromFirestore(snap: any) {
        if (snap === null) return null;
        const data = snap.data() || {};
        return Participant.fromMap({ ...data, participantId: snap.id });
    }

    static fromMap(data: any) {
        return new Participant(
            data.firstName,
            data.lastName,
            data.email,
            data.participantId,
            data.roomCount,
            data.avatar,
            data.documentId
        );
    }

    toMap() {
        return {
            'firstName': this.firstName ?? null,
            'lastName': this.lastName ?? null,
            'email': this.email ?? null,
            'hostId': this.participantId ?? null,
            'roomCount': this.roomCount ?? 0,
            'avatar': this.avatar ?? null,
            'documentId': this.documentId ?? null
        }
    }
}