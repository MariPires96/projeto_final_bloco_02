import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ) { }

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }

    async findById(id: number): Promise<Categoria> {
        let categoria = await this.categoriaRepository.findOne({
            where: {
                id
            }
        });

        if (!categoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return categoria;
    }

    async findByAllNome(nome: string): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            where:{
                nome: ILike(`%${nome}%`)
            }
        });
    }

    async findByStatus(status:boolean):
    Promise<Categoria[]> {
        let categoria = await this.categoriaRepository.find({
            where: {
                status: status
            }
        });

        if (categoria.length === 0)
            throw new HttpException('Nenhuma categoria encontrada com este status!', HttpStatus.NOT_FOUND);

        return categoria;
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria): Promise<Categoria> {
        
        await this.findById(categoria.id)

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {
        
        await this.findById(id)

        return await this.categoriaRepository.delete(id)
    }

}