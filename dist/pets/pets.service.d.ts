import { Owner } from './../owner/entities/owner.entity';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Repository } from 'typeorm';
import { OwnerService } from 'src/owner/owner.service';
export declare class PetsService {
    private readonly petRepo;
    private readonly OwnerService;
    constructor(petRepo: Repository<Pet>, OwnerService: OwnerService);
    create(createPetInput: CreatePetInput): Promise<Pet>;
    findAll(): Promise<Pet[]>;
    findOne(id: number): Promise<Pet>;
    update(id: number, updatePetInput: UpdatePetInput): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<Pet>;
    getOwner(ownerId: number): Promise<Owner>;
}
