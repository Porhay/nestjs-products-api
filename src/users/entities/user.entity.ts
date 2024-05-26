import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';

@Entity('users')
export class User extends AbstractEntity<User> {
  @Column()
  username: string;

  @Column()
  password: string;
}
