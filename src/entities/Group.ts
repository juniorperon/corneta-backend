import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("group")
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
