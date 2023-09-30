import { component$ } from "@builder.io/qwik";
import { ISimpleCategory } from "../interfaces/categories-response";

interface CategoryBannerProps {
    category: ISimpleCategory;
}

export const CategoryBanner = component$<CategoryBannerProps>(({ category }) => {  

    return (
        <section class="container pt-[5rem] min-h-screen md:flex items-center justify-center">
            <div>
                <h2 class="text-4xl md:text-7xl mb-8">
                    <span class="text-gradient">
                        { category.name }
                    </span>
                </h2>
                <p class="line-clamp-2 mb-6">{ category.description }</p>
                <div class="btn-primary">Ver categoria</div>
            </div>
            <img 
                width="858" 
                height="858"
                class="max-w-2xl w-full"
                src={`https://store.innovacode.online/${ category.image }`}
                alt={ category.name }
            />
        </section>
    );
});