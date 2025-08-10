
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Timestamp, Table, OneToMany, ManyToOne, JoinColumn, OneToOne, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { v4 as uuidv4 } from 'uuid';
import { Seccion } from './seccion.entity';


@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    nombre: string;

    @Column({ nullable: true })
    apellido: string;

    @Column({ nullable: false })
    password?: string;

    @Column({ nullable: false , unique: true})
    correo: string;

    @OneToMany(type => Seccion, Seccion => Seccion.User)
    Seccion: Seccion[];



    @DeleteDateColumn()
    deleted_at: Date;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

}