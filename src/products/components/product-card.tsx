import { component$ } from "@builder.io/qwik";
import { ISimpleProduct } from "../interfaces/products-response";

export interface ProductCardProps {
    product: ISimpleProduct;
}

export const ProductCard = component$<ProductCardProps>(({ product }) => {
    console.log(product.images)
    return (
        <div class="product__card">
            <div class="product__card--content">
                <img 
                    src={`https://store.innovacode.online/${ product.images[0].url }`}
                    alt={ product.name } 
                    width={858}
                    height={858}
                />
                <h3 class="line-clamp-1">{ product.name }</h3>
                <p class="line-clamp-2 mb-4">{ product.description }</p>
                <p>Precio: <span class="text-gradient font-bold">{ product.price }$</span></p>
            </div>
        </div>
    );
});