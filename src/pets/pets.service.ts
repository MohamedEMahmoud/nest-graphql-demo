import { Owner } from './../owner/entities/owner.entity';
import { Pet } from './entities/pet.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Repository } from 'typeorm';
import { OwnerService } from 'src/owner/owner.service';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petRepo: Repository<Pet>,
    private readonly OwnerService: OwnerService
  ) { }

  create(createPetInput: CreatePetInput) {
    const pet = this.petRepo.create(createPetInput);
    return this.petRepo.save(pet);
  }

  findAll() {
    return this.petRepo.find();
  }

  findOne(id: number) {
    return this.petRepo.findOneBy({ id });
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return this.petRepo.update(id, updatePetInput);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.petRepo.remove(user);
  }

  getOwner(ownerId: number) {
    return this.OwnerService.findOne(ownerId);
  }
}
