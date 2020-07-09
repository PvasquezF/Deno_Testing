import { products } from '../products.ts';

let getProducts = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: products
    };
}
export default getProducts;