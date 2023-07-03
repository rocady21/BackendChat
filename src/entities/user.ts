import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,BaseEntity } from "typeorm"


@Entity() 
// con BaseEntity le decimos que la entidad usuario hereda metodos y funciones para usar a la hora de hacer un CRUD, para hacerlo sobre la misma entidad
export class User extends BaseEntity  {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstNmae:string

    @Column()
    lastName:string

    @Column()
    age:number

    @Column()
    email:string

    @Column()
    password:string

    @Column({
        default:true
    })
    active:boolean

    @CreateDateColumn()
    createAt:Date

    @UpdateDateColumn()
    updateAd:Date

}