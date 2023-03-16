import { Model, Table, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export default class User extends Model<User> {
  @Column
  name!: string;

  @Column
  lastName!: string;

  @CreatedAt
  @Column
  createdAt!: Date;
 
  @UpdatedAt
  @Column
  updatedAt!: Date;

};

