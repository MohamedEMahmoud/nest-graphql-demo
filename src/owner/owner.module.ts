import { Owner } from './entities/owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [OwnerResolver, OwnerService],
  exports: [OwnerService]
})
export class OwnerModule { }
