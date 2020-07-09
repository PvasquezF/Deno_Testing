import { products } from '../products.ts';
import { Product } from '../types.ts';

let getProducts = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: products
    };
}

let getProduct = ({ params, response }: { params: { id: string }, response: any }) => {
    const product: Product | undefined = products.find(m => m.id == params.id);
    if (product) {
        response.status = 200;
        response.body = {
            success: true,
            data: product
        }
    } else {
        response.status = 404;
        response.body = {
            success: false,
            error: {
                name: 'ProductNotExists',
                errors: [
                    'Producto no encontrado'
                ]
            }
        }
    }
}
export { getProducts, getProduct };