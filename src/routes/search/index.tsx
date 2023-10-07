import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import { IProductsResponse, ProductCard } from '~/products';
import { SearchInput } from '~/shared';

export const useProductsData = routeLoader$(async () => {
    const { data }: IProductsResponse = await fetch(`${process.env.PULBIC_API_URL}/products`)
        .then(response => response.json());
    return data;
});

export default component$(() => {

    const products = useProductsData();

    return (
        <section class="container pt-[5rem]">
            
            <div class="mb-8 flex flex-col md:flex-row items-center justify-between ">
                <h1>Busca nuestros <span class="text-gradient">productos</span></h1>
                <SearchInput />
            </div>

            <div class="grid md:grid-cols-4 gap-[3rem]">
                {
                    products.value.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))
                }
            </div>
        </section>
    )
});