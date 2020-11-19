import { Router } from 'express';
import OrgController from './controllers/OrgController';
import IncidentController from './controllers/IncidentController';
import UserController from './controllers/UserController';

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

export default router;