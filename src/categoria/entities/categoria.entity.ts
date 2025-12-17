import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";


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

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
}