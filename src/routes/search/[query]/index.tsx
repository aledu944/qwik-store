import { component$ } from '@builder.io/qwik';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { ProductCard } from '~/products';
import { ISearchProductsResponse } from '~/products/interfaces/search-products-response';
import { SearchInput } from '~/shared';

export const useSearchProducts = routeLoader$(async (requestEvent) => {
    const { data }: ISearchProductsResponse = await fetch(`${process.env.PULBIC_API_URL}/products?search=${requestEvent.params.query}`)
        .then(response => response.json());

    return data;
});



export default component$(() => {

    const { params } = useLocation();
    const products = useSearchProducts();

    return (
        <main>
            <section class="container pt-[5rem]">
                <div class="mb-8 flex flex-col md:flex-row items-center justify-between ">
                    <h1>Busca nuestros <span class="text-gradient">productos</span></h1>
                    <SearchInput />
                </div>
                <h2>Resultados de: {params.query}</h2>

                <div class="mt-8 grid md:grid-cols-4 gap-[3rem]">
                    {
                        products.value.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
                </div>

            </section>
        </main>
    )
});