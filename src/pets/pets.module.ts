import { OwnerModule } from './../owner/owner.module';
import { Pet } from './entities/pet.entity';
import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnerModule],
  providers: [PetsResolver, PetsService],
})
export class PetsModule { }
