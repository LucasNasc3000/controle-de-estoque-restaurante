import { Router } from 'express';
import homeController from '../controllers/Home'; // O home controller não é importado aqui com maiúsculo para não ser importado como objeto da classe em vez da classe em si, porque a classe já tem o 'h' maiúsculo

const router = new Router();

router.get('/', homeController.index);

export default router;
