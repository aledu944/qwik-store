import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import { CategoryBanner, ICategoriesReponse } from '~/category';
import { IProductsResponse, MostPopularProducts } from '~/products';


export const useCategoriesData = routeLoader$(async () => {
    const { data }: ICategoriesReponse = await fetch(`${ process.env.PULBIC_API_URL }/categories`)
        .then( response => response.json());
    
    return data;
});



export const useProductsData = routeLoader$(async () => {
    
    const { data }: IProductsResponse = await fetch(`${ process.env.PULBIC_API_URL }/products`)
        .then( response => response.json());

    return data;
});



export default component$(() => {

    const categories = useCategoriesData();
    const products = useProductsData();

    return (
        <>
            <CategoryBanner category={ categories.value[0] }/>
            <MostPopularProducts products={ products.value }/>
        </>
    )
});