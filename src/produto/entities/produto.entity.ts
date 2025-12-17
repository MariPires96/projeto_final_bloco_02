import { IsNotEmpty, IsOptional, IsUrl } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    titulo: string; 

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    marca: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    preco: number;

    @Column({ type: "int" })
    quantidade: number;

    @IsOptional() 
    @IsUrl()    
    @Column({ length: 5000, nullable: true })
    foto: string;
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
            onDelete: "CASCADE"
        })
        categoria: Categoria
}