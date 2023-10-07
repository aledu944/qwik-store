import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

export const NavMenu = component$(() => {

    const { url } = useLocation();
    const path = url.pathname;

    return (
        <nav class="navbar">
            <div class="container flex justify-between">
                <div class="text-2xl font-semibold">
                    Qwik <span class="text-gradient">Store</span>
                </div>

                <ul class="flex gap-4">
                    <li class={`nav__link ${ path === '/' ? 'nav__link--active' : '' }`}>
                        <Link href='/'>Inicio</Link> 
                    </li>
                    <li class={`nav__link  ${ path === '/products/' ? 'nav__link--active' : '' }`}>
                        <Link href='/products'>Productos</Link>
                    </li>
                    <li class={`nav__link ${ path === '/search/' ? 'nav__link--active' : '' }`}>
                        <Link href='/search'>Buscar</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
});