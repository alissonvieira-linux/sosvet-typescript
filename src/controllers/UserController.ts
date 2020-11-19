import { Request, Response } from 'express';
import connection from '../database/connection';
import bcrypt from 'bcrypt';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(400);
    }

    const hash = bcrypt.hashSync(password, 8);

    const id = await connection('users').insert({
      name, email, password: hash
    });

    return res.json(id);
  }

  async index(req: Request, res: Response) {
    const users = await connection('users').select('id', 'name', 'email');

    return res.json(users);
  }
}

export default new UserController();