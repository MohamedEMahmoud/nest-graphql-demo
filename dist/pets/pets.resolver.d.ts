import { Owner } from './../owner/entities/owner.entity';
import { PetsService } from './pets.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
export declare class PetsResolver {
    private readonly petsService;
    constructor(petsService: PetsService);
    createPet(createPetInput: CreatePetInput): Promise<Pet>;
    findAll(): Promise<Pet[]>;
    findOne(id: number): Promise<Pet>;
    updatePet(updatePetInput: UpdatePetInput): Promise<import("typeorm").UpdateResult>;
    removePet(id: number): Promise<Pet>;
    owner(pet: Pet): Promise<Owner>;
}
