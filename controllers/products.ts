import { products } from '../products.ts';
import { Product } from '../types.ts';
import { v4 } from 'https://deno.land/std/uuid/mod.ts';
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

let addProduct = async ({ request, response }: { request: any, response: any }) => {
    const body = await request.body();
    if (!request.hasBody) {
        response.status = 400;
        response.body = {
            success: false,
            error: {
                name: 'NoDataFound',
                errors: [
                    'No se ha encontrado el cuerpo de la petición'
                ]
            }
        }
    } else {
        const product: Product = body.value;
        product.id = v4.generate();
        products.push(product);
        response.status = 201;
        response.body = {
            success: false,
            data: product
        }
    }
}
export { getProducts, getProduct, addProduct };