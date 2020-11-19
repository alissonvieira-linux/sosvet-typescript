import { Request, Response } from 'express';
import connection from '../database/connection';

class IncidentController {
  async create(req: Request, res: Response) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    if (!ong_id) {
      return res.sendStatus(401);
    }

    const ong = await connection('orgs').where('id', ong_id).where('type', 'ONG').first();

    if(!ong) {
      return res.sendStatus(401);
    }

    const id = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json(id);
  }

  async index(req: Request, res: Response) {
    const incident = await connection('incidents')
      .join('orgs', 'orgs.id', '=', 'incidents.ong_id')
      .select([
        'incidents.*',
        'orgs.name',
        'orgs.phone',
        'orgs.email'
      ]);

    return res.json(incident);
  }
}

export default new IncidentController();