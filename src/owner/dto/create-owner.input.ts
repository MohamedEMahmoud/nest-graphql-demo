import { IsAlpha } from 'class-validator';
import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreateOwnerInput {
  @IsAlpha()
  @Field(type => String)
  name: string;

}
