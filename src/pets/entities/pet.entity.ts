import { Owner } from './../../owner/entities/owner.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsAlpha } from 'class-validator';

@Entity()
@ObjectType()
export class Pet {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @IsAlpha()
  @Column()
  @Field(type => String)
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Field(type => Int)
  ownerId: number;

  @ManyToOne(() => Owner, owner => owner.pets)
  @Field(type => Owner)
  owner: Owner;
}
