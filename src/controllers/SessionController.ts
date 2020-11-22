import { Request, Response } from 'express';
import connection from '../database/connection';
import bcrypt from 'bcrypt';

class SessionController {
  async createUserSession(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }
    
    const user = await connection('users')
    .where('email', email)
    .select('*');

    if(user.length === 0) {
      return res.status(400).json("E-mail não cadastrado.");
    }
    // Extract the password
    const passArray = user.map(data => ( data.password ));

    if (!bcrypt.compareSync(password, passArray[0])) {
      return res.status(400).json('Senha incorreta.');
    }
    
    return res.json(user);

  }

  async createOrgSession(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }
    
    const org = await connection('orgs')
    .where('email', email)
    .select('*');

    if(org.length === 0) {
      return res.status(400).json("E-mail não cadastrado.");
    }
    // Extract the password
    const passArray = org.map(data => ( data.password ));

    if (!bcrypt.compareSync(password, passArray[0])) {
      return res.status(400).json('Senha incorreta.');
    }
    
    return res.json(org);
  }
}

export default new SessionController();