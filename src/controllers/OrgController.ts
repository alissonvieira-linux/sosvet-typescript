import { Request, Response } from 'express';
import connection from '../database/connection';
import bcrypt from 'bcrypt';

class OrgController {
  async create(req: Request, res: Response) {
    const {
      type,
      name,
      email,
      password,
      phone,
      cep,
      latitude,
      longitude
    } = req.body;

    const hash = bcrypt.hashSync(password, 8);

    const id = await connection('orgs').insert({
      type,
      name,
      email,
      password: hash,
      phone,
      cep,
      latitude,
      longitude
    });

    return res.json(id);
  }

  async index(req: Request, res: Response) {
    const orgs = await connection('orgs').select('id', 'name', 'type', 'email', 'phone', 'cep', 'latitude', 'longitude');

    return res.json(orgs);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const org = await connection('orgs')
    .select('id', 'name', 'type', 'email', 'phone', 'cep', 'latitude', 'longitude')
    .where('id', id)
    .first();

    return res.json(org);
  }
}

export default new OrgController();