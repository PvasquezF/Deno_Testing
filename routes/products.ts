import { Router } from 'https://deno.land/x/oak/mod.ts';
import getProducts from '../controllers/products.ts';
const productsRouter = new Router();
productsRouter.get('/api/v1/products', getProducts);

export default productsRouter;

