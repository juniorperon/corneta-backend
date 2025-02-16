import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("groups")
export class Group {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  name: string;
}

export default Group;
