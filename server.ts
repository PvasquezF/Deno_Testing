import { Application } from 'https://deno.land/x/oak/mod.ts';
import productsRouter from './routes/products.ts';
const port = 5000;
const app = new Application();

app.use(productsRouter.routes());
app.use(productsRouter.allowedMethods())

console.log(`Server running on port ${port}`);
await app.listen({ port })
