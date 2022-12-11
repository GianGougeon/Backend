import { IsNotEmpty, IsNumber, Length, Min } from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  @Length(0, 255)
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  precio: number;

  @IsNotEmpty()
  @Length(0, 255)
  url: string;
}
