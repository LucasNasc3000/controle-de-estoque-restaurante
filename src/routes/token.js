import { Router } from 'express';
import tokenController from '../controllers/Token'; // O token controller não é importado aqui com maiúsculo para não ser importado como objeto da classe em vez da classe em si, porque a classe já tem o 't' maiúsculo

const router = new Router();

router.post('/', tokenController.store);

export default router;
