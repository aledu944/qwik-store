import { component$ } from "@builder.io/qwik";

import { ProductCard } from "./product-card";
import { ISimpleProduct } from "../interfaces/products-response";

export interface MostPopularProductsProps {
    products: ISimpleProduct[]
}



export const MostPopularProducts = component$<MostPopularProductsProps>(({ products }) => {

    return (
        <section class="container min-h-screen pt-[5rem]">
            <h2 class="text-center">
                Productos mas <span class="text-gradient">populares</span>
            </h2>
            <p class="text-center mb-8">Nuestro catalogo de productos de ultima generación. Todos con garatia de hasta un año</p>
            <div class="grid md:grid-cols-4 gap-[3rem]">
                {
                    products.map(( product ) => (
                        <ProductCard product={ product } key={ product.id }/>
                    ))
                }
            </div>
        </section>
    );
});