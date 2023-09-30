import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import { IProductsResponse, ProductCard } from '~/products';

export const useProductsData = routeLoader$(async () => {
    const { data }: IProductsResponse = await fetch(`${ process.env.PULBIC_API_URL }/products`)
        .then( response => response.json());
    return data;
});

export default component$(() => {

    const products = useProductsData();

    return (
        <section class="container pt-[5rem]">
            <h1 class="mb-8">Busca nuestros <span class="text-gradient">productos</span></h1>

            <div>
                {/* SEARCH INPUT */}
            </div>
            <div class="grid md:grid-cols-4 gap-[3rem]">
                {
                    products.value.map(( product ) => (
                        <ProductCard product={ product } key={ product.id }/>
                    ))
                }
            </div>
        </section>
    )
});