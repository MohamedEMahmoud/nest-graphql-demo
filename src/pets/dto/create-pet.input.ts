import { Owner } from './../../owner/entities/owner.entity';
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreatePetInput {

  @IsAlpha()
  @Field(type => String)
  name: string;

  @Field({ nullable: true })
  type?: string;
  
  @Field(() => Int)
  ownerId: number;
}
