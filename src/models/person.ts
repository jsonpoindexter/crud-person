import { Entity, PrimaryGeneratedColumn, Column, VersionColumn } from 'typeorm'

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number

  @VersionColumn()
  version: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ nullable: true })
  middleName: string

  @Column()
  email: string

  @Column()
  age: number
}
