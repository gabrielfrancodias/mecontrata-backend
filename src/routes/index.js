import { Router } from 'express';

import userRouter from './user.routes';
import sessionRouter from './session.routes';
import announcementRouter from './announcement.routes';
import categoryRouter from './category.routes';

const router = Router();

router.get('/', (_, res) => res.json({ ok: true }));

router.use('/ad', announcementRouter);
router.use('/session', sessionRouter);
router.use('/user', userRouter);
router.use('/category', categoryRouter);

router.use('/test', (_, res) => res.status(200).json({ ok: true }));

export default router;
