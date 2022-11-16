import { Owner } from './../../owner/entities/owner.entity';
export declare class Pet {
    id: number;
    name: string;
    type?: string;
    ownerId: number;
    owner: Owner;
}
