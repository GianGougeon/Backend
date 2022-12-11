import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from 'src/dto/createProduct.dto';
import { UpdateProductDto } from 'src/dto/updateProduct.dto';
import ProductEntity from 'src/entities/product.entity';
import { ProductsService } from './products.service';

@Controller('api/productos')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  // Metodo POST para crear un producto
  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.productService.create(createProductDto);
  }
  // Metodo GET para obtener todos los productos
  @Get()
  async findAll(): Promise<ProductEntity[]> {
    return this.productService.findAll();
  }
  // Metodo GET para obtener un producto por id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }
  // Metodo PUT para actualizar un producto por id
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(+id, updateProductDto);
  }
  // Metodo DELETE para eliminar un producto por id
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
