import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User_Document')
export class UserDocuments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean' })
  citizenship: boolean;

  @Column({ type: 'varchar' })
  passport: string;

  @Column({ type: 'varchar' })
  pictures: string;
}
