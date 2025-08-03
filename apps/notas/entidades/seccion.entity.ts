
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Timestamp, Table, OneToMany, ManyToOne, JoinColumn, OneToOne, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { v4 as uuidv4 } from 'uuid';
import { User } from './user.entity';
import { Notas } from './notas.entity';


@Entity()
export class Seccion extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    nombre: string;



    @ManyToOne(() => User, User => User.id)
    User: User;

    @OneToMany(type => Notas, Notas => Notas.Seccion)
    Notas: Notas[];

    @DeleteDateColumn()
    deleted_at: Date;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

}