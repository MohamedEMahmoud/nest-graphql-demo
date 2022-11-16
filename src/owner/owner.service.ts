import { Owner } from './entities/owner.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Repository } from 'typeorm';

@Injectable()
export class OwnerService {

  constructor(@InjectRepository(Owner) private readonly ownerRepo: Repository<Owner>) { }

  create(createOwnerInput: CreateOwnerInput) {
    const owner = this.ownerRepo.create(createOwnerInput);
    return this.ownerRepo.save(owner);
  }

  findAll() {
    return this.ownerRepo.find();
  }

  findOne(id: number) {
    return this.ownerRepo.findOneBy({ id });
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return this.ownerRepo.update(id, updateOwnerInput);
  }

  async remove(id: number) {
    const owner = await this.findOne(id);
    return this.ownerRepo.remove(owner);
  }
}
