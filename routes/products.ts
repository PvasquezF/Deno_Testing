import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getProducts, getProduct, addProduct, updateProduct } from '../controllers/products.ts';
const productsRouter = new Router();
productsRouter.get('/api/v1/products', getProducts)
    .get('/api/v1/products/:id', getProduct)
    .post('/api/v1/products', addProduct)
    .put('/api/v1/products/:id', updateProduct)

export default productsRouter;

