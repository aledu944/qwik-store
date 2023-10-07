import { component$ } from '@builder.io/qwik';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { IFullCategory } from '~/category';
import { ProductCard } from '~/products';


export const useCategoryFullData = routeLoader$(async (requestEvent) => {
    const data: IFullCategory[] = await fetch(`${process.env.PULBIC_API_URL}/categories/${requestEvent.params.slug}`)
        .then(response => response.json());

    return data[0];
});




export default component$(() => {

    const { params } = useLocation();
    const category = useCategoryFullData();

    return (
        <main>
            <section class="container pt-[5rem]">
                <h1>Categoria: {category.value.name}</h1>

                <div class="mt-8 grid md:grid-cols-4 gap-[3rem]">
                    {
                        category.value.products.map((product) => (
                            <div key={ product.id } class="product__card">
                                <div class="product__card--content">
                                    {/* <img 
                                    src={`https://store.innovacode.online/${ product.images[0].url }`}
                                    alt={ product.name } 
                                    width={858}
                                    height={858}
                                /> */}
                                    <h3 class="line-clamp-1">{product.name}</h3>
                                    <p class="line-clamp-2 mb-4">{product.description}</p>
                                    <p>Precio: <span class="text-gradient font-bold">{product.price}$</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    )
});