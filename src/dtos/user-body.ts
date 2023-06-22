import {
  IsNotEmpty,
  IsString,
  IsEmail,
  Length,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';
import { AddressBody } from './address-body';
import { Transform, Type } from 'class-transformer';

export class UserBody {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name must not be empty' })
  @Transform(({ value }) => value.toLowerCase())
  name: string;

  @IsString({ message: 'socialName must be a string' })
  @IsNotEmpty({ message: 'socialName must not be empty' })
  socialName: string;

  @IsEmail({}, { message: 'email must be a valid email' })
  email: string;

  @IsNotEmpty({ message: 'CNPJ must not be empty' })
  @Length(14, 14, { message: 'CNPJ must have 14 characters' })
  document: string;

  @IsString({ message: 'password must be a string' })
  @IsNotEmpty({ message: 'password must not be empty' })
  password: string;

  @IsString({ message: 'passwordConfirmation must be a string' })
  @IsNotEmpty({ message: 'passwordConfirmation must not be empty' })
  passwordConfirmation: string;

  @IsString({ message: 'phone must be a string' })
  @Length(11, 11, { message: 'phone must have 14 characters' })
  phone: string;

  @IsNotEmptyObject()
  @Type(() => AddressBody)
  @ValidateNested()
  address: AddressBody;
}
