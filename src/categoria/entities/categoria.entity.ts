import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false})
    descricao: string

    @Column({ default: true})
    status: boolean;

    @UpdateDateColumn()
    data: Date
}