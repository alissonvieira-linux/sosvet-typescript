import { Router } from 'express';
import OrgController from './controllers/OrgController';
import IncidentController from './controllers/IncidentController';
import UserController from './controllers/UserController';

import SessionController from './controllers/SessionController';

const router = Router();

// Orgs Routes
router.post('/orgs', OrgController.create);
router.get('/orgs', OrgController.index);
router.get('/orgs/:id', OrgController.show);

// Incidents Routes
router.post('/incidents', IncidentController.create);
router.get('/incidents', IncidentController.index);

// Users Routes
router.post('/users', UserController.create);
router.get('/users', UserController.index);

// Session Routes
router.post('/users/session', SessionController.createUserSession);
router.post('/orgs/session', SessionController.createOrgSession);

export default router;