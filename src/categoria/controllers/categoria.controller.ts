import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.services";
import { Categoria } from "../entities/categoria.entity";


@Controller("/categorias")
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<Categoria> {
        return this.categoriaService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByAllNome(@Param('nome') nome: string): Promise<Categoria[]> {
        return this.categoriaService.findByAllNome(nome);
    }

    @Get('/status/:status')
    @HttpCode(HttpStatus.OK)
    findByStatus(@Param('status', ParseBoolPipe)status:boolean): Promise<Categoria[]> {
        return this.categoriaService.findByStatus(status);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(categoria);
    }
}