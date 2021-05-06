import { Entity, PrimaryGeneratedColumn, Column, VersionColumn } from 'typeorm'

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number

  @VersionColumn()
  @Column({ nullable: false })
  firstName: string

  @Column({ nullable: false })
  lastName: string

  @Column()
  middleName: string

  @Column({ nullable: false })
  email: string

  @Column({ nullable: false })
  age: number
}
