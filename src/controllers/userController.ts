import { Request, Response } from 'express';
import UserService from '../services/userService';
import jwt from 'jsonwebtoken';

class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      await UserService.deleteUser(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

}

export default new UserController();
