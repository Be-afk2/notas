
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Timestamp, Table, OneToMany, ManyToOne, JoinColumn, OneToOne, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { v4 as uuidv4 } from 'uuid';
import { User } from './user.entity';
import { Seccion } from './seccion.entity';


@Entity()
export class Notas extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 300,
    })
    Nota: string;

    @ManyToOne(() => Seccion, Seccion => Seccion.id)
    Seccion: Seccion;


    @DeleteDateColumn()
    deleted_at: Date;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

}