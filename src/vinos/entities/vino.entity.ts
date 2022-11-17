import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vino {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  cantidad:number;
  @Column()
  marca:string;
  @Column()
  anio:number;
  @Column()
  tipo:string;
}