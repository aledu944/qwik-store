import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const NavMenu = component$(() => {
    return (
        <nav class="navbar">
            <div class="container flex justify-between">
                <div class="text-2xl font-semibold">
                    Qwik <span class="text-gradient">Store</span>
                </div>

                <ul class="flex gap-4">
                    <li class={`nav__link`}>
                        <Link>Inicio</Link> 
                    </li>
                    <li class={`nav__link`}>
                        <Link>Productos</Link>
                    </li>
                    <li class={`nav__link`}>
                        <Link>Carrito</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
});