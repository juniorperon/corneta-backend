import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("player")
export class Player {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ default: 0 })
  points: number;

  @Column()
  groupId: string;
}
