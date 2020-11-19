import { Router } from 'express';
import OrgController from './controllers/OrgController';
import IncidentController from './controllers/IncidentController';

const router = Router();

// Orgs Routes
router.post('/orgs', OrgController.create);
router.get('/orgs', OrgController.index);
router.get('/orgs/:id', OrgController.show);

// Incidents Routes
router.post('/incidents', IncidentController.create);
router.get('/incidents', IncidentController.index);

export default router;