// src/repositories/user.repository.ts
import BaseRepository from "./base.repository.js";
import User  from "../DB/models/user.model.js";

export default class UserRepository extends BaseRepository<typeof User.prototype> {
  constructor() {
    super(User);
  }

  // You can now add custom queries specific to users
  async findByEmail(email: string, excluded: string[]) {
    return await this.model.findOne({ where: { email }, attributes: {exclude: excluded} });
  }


  async getActiveUsersCount(){

  }
  async getAvgExpensesPerUser(){

  }

  async getNewUsersThisMonthCount(){

  }

  async getSubscripedUsersCount(){

  }

}


