import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Repository } from 'typeorm';
export declare class OwnerService {
    private readonly ownerRepo;
    constructor(ownerRepo: Repository<Owner>);
    create(createOwnerInput: CreateOwnerInput): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: number): Promise<Owner>;
    update(id: number, updateOwnerInput: UpdateOwnerInput): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<Owner>;
}
