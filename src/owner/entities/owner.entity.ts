import { IsAlpha } from 'class-validator';
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pets/entities/pet.entity';

@Entity()
@ObjectType()
export class Owner {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @IsAlpha()
  @Column()
  @Field(type => String)
  name: string;

  @OneToMany(() => Pet, pet => pet.owner)
  @Field(type => [Pet], { nullable: true })
  pets?: Pet[];
}
