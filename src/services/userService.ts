import UserModel, { IUser } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
class UserService {
  async createUser(user: IUser): Promise<IUser> {
    return await UserModel.create(user);
  }

  async getUsers(): Promise<IUser[]> {
    return await UserModel.find();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await UserModel.findById(id);
  }

  async updateUser(id: string, user: IUser): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUser(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}

export default new UserService();
