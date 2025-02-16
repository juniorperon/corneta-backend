import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("pairs")
export class Pair {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column('varchar', { length: 100, nullable: false })
  edition!: string;

  @Column()
  playerId: number;

  @Column()
  partnerId: number;

  @Column()
  groupId: number;
}

export default Pair;