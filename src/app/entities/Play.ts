import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("plays")
export class Play {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column('varchar', { length: 100, nullable: false })
  name!: string;

  @Column({ default: 0 })
  points: number;

  @Column()
  groupId!: number;
}

export default Play;