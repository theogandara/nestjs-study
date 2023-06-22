import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class AddressBody {
  @IsString({ message: 'street must be a string' })
  @IsNotEmpty({ message: 'street must not be empty' })
  street: string;

  @IsNumber({}, { message: 'number must be a number' })
  @IsNotEmpty({ message: 'number must not be empty' })
  number: string;

  @IsString({ message: 'neighborhood must be a string' })
  @IsNotEmpty({ message: 'neighborhood must not be empty' })
  neighborhood: string;

  @IsString({ message: 'complement must be a string' })
  @IsNotEmpty({ message: 'complement must not be empty' })
  complement: string;

  @IsString({ message: 'city must be a string' })
  @IsNotEmpty({ message: 'city must not be empty' })
  city: string;

  @IsString({ message: 'state must be a string' })
  @Length(2, 2, { message: 'state must have 2 characters' })
  state: string;

  @IsString({ message: 'zipCode must be a string' })
  @Length(8, 8, { message: 'zipCode must have 8 characters' })
  zipCode: string;
}
