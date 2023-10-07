import { component$ } from '@builder.io/qwik';
import { routeLoader$, useNavigate } from '@builder.io/qwik-city';
import { ICategoriesReponse } from '~/category';
import { IProductsResponse, ProductCard } from '~/products';


export const useProductsData = routeLoader$(async () => {
    const { data }: IProductsResponse = await fetch(`${process.env.PULBIC_API_URL}/products`)
        .then(response => response.json());
    return data;
});

export const useCategoriesData = routeLoader$(async () => {
    const { data }: ICategoriesReponse = await fetch(`${ process.env.PULBIC_API_URL }/categories`)
        .then( response => response.json());
    
    return data;
});


export default component$(() => {

    const products = useProductsData();
    const categories = useCategoriesData();

    const navigate = useNavigate();

    return (
        <main>
            <section class="container pt-[5rem]">
                <h1 class="mb-8">Todos los <span class="text-gradient">productos</span></h1>
                
                <h3 class="mb-1">Categorias</h3>
                <div class="flex items-center gap-4">
                    {
                        categories.value.map(category => (
                            <div 
                                onClick$={ () => navigate(`/categories/${ category.slug }`) }
                                key={ category.id } 
                                class="text-white cursor-pointer bg-gradient rounded-full max-w-max px-3 py-2"
                            >
                                { category.name }
                            </div>
                        ))
                    }
                </div>

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