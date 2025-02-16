import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("players")
export class Player {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column('varchar', { length: 100, nullable: false })
  name!: string;

  @Column({ default: 0 })
  points: number;

  @Column()
  groupId!: number;
}

export default Player;
